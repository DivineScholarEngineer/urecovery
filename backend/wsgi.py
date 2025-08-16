# import os
# from django.core.wsgi import get_wsgi_application
#
# # os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
# os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
#
# application = get_wsgi_application()

import os
from django.core.wsgi import get_wsgi_application

# Force correct settings, ignoring any stray env variable
os.environ["DJANGO_SETTINGS_MODULE"] = "backend.settings"

application = get_wsgi_application()
