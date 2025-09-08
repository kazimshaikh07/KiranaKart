from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from django.contrib import messages
from django.contrib.auth import logout


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

        # Check if username is empty
        if not username:
            messages.error(request, "Username is required!")
            return redirect('signup')

        # Check if passwords match
        if password1 != password2:
            messages.error(request, "Passwords do not match!")
            return redirect('signup')

        # Check if email already exists
        if User.objects.filter(email=email).exists():
            messages.error(request, "User already exists with this email.")
            return redirect('signup')

        # Check if username already exists
        if User.objects.filter(username=username).exists():
            messages.error(request, "Username already taken.")
            return redirect('signup')

        # Create new user
        user = User.objects.create_user(username=username, email=email, password=password1)
        user.save()

        # Send success message and redirect to login page
        messages.success(request, "Account created successfully! Please login.")
        return redirect('signin')

    # If request is GET, just load the signup page
    return render(request, 'register.html')

def signin(request):
    if request.method == "POST":
        email = request.POST['email']
        password = request.POST['password']

        try:
            user_obj = User.objects.get(email=email)
            user = authenticate(request, username=user_obj.username, password=password)
            if user is not None:
                login(request, user)
                messages.success(request, f"Welcome back {user.first_name or user.username}!")
                return redirect('base')  # go to homepage
            else:
                messages.error(request, "Invalid email or password.")
        except User.DoesNotExist:
            messages.error(request, "Invalid email or password.")

    return render(request, "login.html")


def signout(request):
    logout(request)
    messages.success(request, "You have been logged out successfully!")
    return redirect('signin')



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


