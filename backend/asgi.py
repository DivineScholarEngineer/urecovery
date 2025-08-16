# import os
# from django.core.asgi import get_asgi_application
#
# os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
# application = get_asgi_application()

import os
from django.core.asgi import get_asgi_application

# Force correct settings, ignoring any stray env variable
os.environ["DJANGO_SETTINGS_MODULE"] = "backend.settings"

application = get_asgi_application()
