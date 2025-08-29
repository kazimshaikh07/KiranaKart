from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def home(request):
    return render(request, 'base.html')

# header section views
def signin(request):
    return render(request, 'signin.html')

def help(request):
    return render(request, 'help.html')

def social(request):
    return render(request, 'social.html')



# comany section views
def  about(request):
    return render(request, 'about.html')

def career(request):
    return render(request, 'career.html')

def team(request):
    return render(request, 'team.html')

# instamart line views

def one(request):
    return render(request, 'one.html')

def genie(request):
    return render(request, 'genie.html')
