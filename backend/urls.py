# backend/urls.py
from django.contrib import admin
from django.urls import path, re_path
from django.shortcuts import render
from django.conf import settings

# API views
from . import api as api_views

def index_view(request):
    # Render the built React app. TEMPLATES['DIRS'] should include the frontend dir,
    # and STATICFILES_DIRS should include frontend/build for assets.
    return render(request, 'build/index.html')

urlpatterns = [
    path('admin/', admin.site.urls),

    # --- Auth & profile API ---
    path('api/me', api_views.me, name='api_me'),
    path('api/login', api_views.login, name='api_login'),
    path('api/signup', api_views.signup, name='api_signup'),
    path('api/logout', api_views.logout, name='api_logout'),
    path('api/profile', api_views.update_profile, name='api_profile'),
    path('api/password', api_views.change_password, name='api_password'),

    # Serve React on / and any unknown route (client-side routing)
    path('', index_view, name='index'),
    re_path(r'^(?!api/).*$', index_view),
]
