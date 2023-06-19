from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponse
from django.contrib.auth import login, authenticate
from . import forms
from .models import mytable2
from django.contrib import messages




def login_page(request):
    form = forms.LoginForm()
    message = ''
    if request.method == 'POST':
        form = forms.LoginForm(request.POST)
        if form.is_valid():
            user = authenticate(
                username=form.cleaned_data['username'],
                password=form.cleaned_data['password'],
            )
            if user is not None:
                login(request, user)
                message = f'Hello {user.username}! You have been logged in'
                return redirect(index)
            else:
                message = 'Login failed!'
    return render(
        request, 'marks/login.html', context={'form': form, 'message': message})

def index(request):
    markss = mytable2.objects.all()
    return render(request, 'logged.html', {'markss': markss})


def mytable2form(instance):
    pass

def index2(request):
    markss = mytable2.objects.all()
    return render(request, 'marks/teachers.html', {'markss': markss})

def edit(request):
    markss = mytable2.objects.all()

    context = {
        'markss': markss
    }

    return render(request, 'index.html', context)

def update(request, id):
    if request.method == "POST":
       std_rollno = request.POST.get('std_rollno')
       std_name = request.POST.get('std_name')
       std_branch = request.POST.get('std_branch')
       std_course = request.POST.get('std_course')
       std_studyhours = request.POST.get('std_studyhours')
       std_marks = request.POST.get('std_marks')

       yo = mytable2(
           id = id,
           std_rollno = std_rollno,
           std_name = std_name,
           std_branch = std_branch,
           std_course = std_course,
           std_studyhours = std_studyhours,
           std_marks = std_marks,
       )
       yo.save()
       return redirect('edit')

    return render(request, 'index.html')

def delete(request, id):
    yo = mytable2.objects.filter(id = id).delete()
    return redirect('edit')




