from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name='base'),
    
    # signin & signup section
    path("signin/", views.signin, name="signin"),
    path("signup/", views.signup, name="signup"),
    path('logout/', views.logout_view, name='logout'),

    # header section
    path('help/', views.help, name='help'),

    # social line
    path('social/', views.social, name='social'),

    # company section
    path('about/', views.about, name='about'),  
    path('career/', views.career, name='career'),
    path('team/', views.team, name='team'),
    path('one/', views.one, name='one'),

    # instamart line
    path('genie/', views.genie, name='genie'),
]
