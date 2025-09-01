from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from django.contrib import messages
# Create your views here.
def home(request):
    return render(request, 'base.html')

# header section views
def signin(request):
    return render(request, 'signin.html')
# singin & signup section views
def signin_view(request):
    return render(request, 'signin.html')
def signup_view(request):
    return render(request, 'signup.html')

def signup(request):
    if request.method == "POST":   # ✅ Check if form is submitted
        username = request.POST.get('username', '').strip()   # take username
        email = request.POST.get('email', '').strip()         # take email
        password1 = request.POST.get('password1', '')         # take password1
        password2 = request.POST.get('password2', '')         # take password2

        # 1️⃣ Check if username is empty
        if not username:
            messages.error(request, "Username is required!")
            return redirect('signup')

        # 2️⃣ Check if passwords match
        if password1 != password2:
            messages.error(request, "Passwords do not match!")
            return redirect('signup')

        # 3️⃣ Check if email already exists
        if User.objects.filter(email=email).exists():
            messages.error(request, "User already exists with this email.")
            return redirect('signup')

        # 4️⃣ Check if username already exists
        if User.objects.filter(username=username).exists():
            messages.error(request, "Username already taken.")
            return redirect('signup')

        # 5️⃣ Create new user
        user = User.objects.create_user(username=username, email=email, password=password1)
        user.save()

        # 6️⃣ Send success message and redirect to login page
        messages.success(request, "Account created successfully! Please login.")
        return redirect('signin')

    # 7️⃣ If request is GET, just load the signup page
    return render(request, 'register.html')




def signin(request):
    if request.method == "POST":
        username = request.POST['name']
        password = request.POST['password']
        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('/')  # redirect to home page
        else:
            messages.error(request, "Invalid username or password.")
            return redirect('signin')
    return render(request, "login.html")


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


