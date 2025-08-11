from django.contrib import admin
from django.urls import path, re_path
from django.views.generic import TemplateView
from django.http import HttpResponse
from django.conf import settings
from django.conf.urls.static import static

def index_view(request):
    index_path = settings.BASE_DIR / "frontend" / "build" / "index.html"
    if index_path.exists():
        return HttpResponse(index_path.read_text(encoding="utf-8"))
    # Fallback to template rendering
    return TemplateView.as_view(template_name="build/index.html")(request)

def health(_request):
    return HttpResponse("ok")

urlpatterns = [
    path("admin/", admin.site.urls),
    path("health", health, name="health"),
    path("", index_view, name="index"),
]

# Catch-all to SPA (but ignore /static/* so assets load)
urlpatterns += [
    re_path(r"^(?!static/).*$", index_view),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
