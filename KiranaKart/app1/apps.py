from django.apps import AppConfig

# registering the app configuration for 'app1'
class App1Config(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'app1'
