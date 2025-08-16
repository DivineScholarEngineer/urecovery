# backend/api.py
from django.contrib.auth import authenticate, login as dj_login, logout as dj_logout, get_user_model
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
from django.utils.timezone import now
import json

User = get_user_model()


def _json_body(request):
    try:
        return json.loads(request.body.decode('utf-8') or '{}')
    except Exception:
        return {}


def _user_dict(u: User):
    if not u:
        return None
    return {
        "id": u.id,
        "username": u.username,
        "email": u.email,
        "first_name": u.first_name,
        "last_name": u.last_name,
        "date_joined": u.date_joined.isoformat() if u.date_joined else None,
        "last_login": u.last_login.isoformat() if u.last_login else None,
    }


@require_http_methods(["GET"])
def me(request):
    if not request.user.is_authenticated:
        return JsonResponse({"authenticated": False, "user": None}, status=401)
    return JsonResponse({"authenticated": True, "user": _user_dict(request.user)})


@csrf_exempt
@require_http_methods(["POST"])
def login(request):
    """Strict: username + password only."""
    data = _json_body(request)
    username = (data.get("username") or "").strip()
    password = (data.get("password") or "").strip()

    if not username or not password:
        return JsonResponse({"ok": False, "error": "Username and password are required."}, status=400)

    user = authenticate(request, username=username, password=password)
    if user is None:
        return JsonResponse({"ok": False, "error": "Invalid username or password."}, status=400)

    dj_login(request, user)
    user.last_login = now()
    user.save(update_fields=["last_login"])
    return JsonResponse({"ok": True, "user": _user_dict(user)})


@csrf_exempt
@require_http_methods(["POST"])
def signup(request):
    data = _json_body(request)
    username = (data.get("username") or "").strip()
    email = (data.get("email") or "").strip().lower()
    password = (data.get("password") or "").strip()
    first_name = (data.get("first_name") or "").strip()
    last_name = (data.get("last_name") or "").strip()

    if not username or not email or not password:
        return JsonResponse({"ok": False, "error": "username, email and password are required."}, status=400)

    if User.objects.filter(username=username).exists():
        return JsonResponse({"ok": False, "error": "Username already taken."}, status=400)
    if User.objects.filter(email=email).exists():
        return JsonResponse({"ok": False, "error": "Email already in use."}, status=400)

    user = User.objects.create_user(
        username=username,
        email=email,
        password=password,
        first_name=first_name,
        last_name=last_name,
    )
    dj_login(request, user)
    return JsonResponse({"ok": True, "user": _user_dict(user)}, status=201)


@csrf_exempt
@require_http_methods(["POST"])
def update_profile(request):
    if not request.user.is_authenticated:
        return JsonResponse({"ok": False, "error": "Unauthorized"}, status=401)

    data = _json_body(request)
    u = request.user

    new_username = data.get("username")
    new_email = data.get("email")
    new_first = data.get("first_name")
    new_last = data.get("last_name")

    if new_username and new_username != u.username:
        if User.objects.filter(username=new_username).exclude(pk=u.pk).exists():
            return JsonResponse({"ok": False, "error": "Username already taken."}, status=400)
        u.username = new_username

    if new_email and new_email != u.email:
        if User.objects.filter(email=new_email).exclude(pk=u.pk).exists():
            return JsonResponse({"ok": False, "error": "Email already in use."}, status=400)
        u.email = new_email

    if new_first is not None:
        u.first_name = new_first
    if new_last is not None:
        u.last_name = new_last

    u.save()
    return JsonResponse({"ok": True, "user": _user_dict(u)})


@csrf_exempt
@require_http_methods(["POST"])
def change_password(request):
    if not request.user.is_authenticated:
        return JsonResponse({"ok": False, "error": "Unauthorized"}, status=401)

    data = _json_body(request)
    current_password = data.get("current_password") or ""
    new_password = data.get("new_password") or ""
    confirm = data.get("confirm_password") or ""

    if not request.user.check_password(current_password):
        return JsonResponse({"ok": False, "error": "Current password is incorrect."}, status=400)

    if new_password != confirm:
        return JsonResponse({"ok": False, "error": "New passwords do not match."}, status=400)

    if len(new_password) < 6:
        return JsonResponse({"ok": False, "error": "Password must be at least 6 characters."}, status=400)

    request.user.set_password(new_password)
    request.user.save()

    # keep the session logged in after password change
    user = authenticate(request, username=request.user.username, password=new_password)
    if user:
        dj_login(request, user)

    return JsonResponse({"ok": True})


@csrf_exempt
@require_http_methods(["POST", "GET"])
def logout(request):
    dj_logout(request)
    return JsonResponse({"ok": True})
