from django.shortcuts import render, redirect, get_object_or_404
from django.http.response import Http404, JsonResponse
from django.contrib.auth import login, authenticate
from . import forms
from .models import mytable3
from .serializers import TableSerializer
from rest_framework.views import APIView
from rest_framework.response import Response


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
    markss = mytable3.objects.all()
    return render(request, 'logged.html', {'markss': markss})


def mytable3form(instance):
    pass


def index2(request):
    markss = mytable3.objects.all()
    return render(request, 'marks/teachers.html', {'markss': markss})


def edit(request):
    markss = mytable3.objects.all()

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

        yo = mytable3(
            id=id,
            std_rollno=std_rollno,
            std_name=std_name,
            std_branch=std_branch,
            std_course=std_course,
            std_studyhours=std_studyhours,
            std_marks=std_marks,
        )
        yo.save()
        return redirect('edit')

    return render(request, 'index.html')


def delete(request, id):
    yo = mytable3.objects.filter(id=id).delete()
    return redirect('edit')


class StudentView(APIView):

    def post(self, request):
        data = request.data
        serializer = TableSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Student Added Successfully", safe=False)
        return JsonResponse("Failed to Add Student", safe=False)

    def get_student(self, pk):
        try:
            student = mytable3.objects.get(id=pk)
            return student
        except mytable3.DoesNotExist:
            raise Http404

    def get(self, request, pk=None):
        if pk:
            data = self.get_student(pk)
            serializer = TableSerializer(data)
        else:
            data = mytable3.objects.all()
            serializer = TableSerializer(data, many=True)
        return Response(serializer.data)


    def put(self, request, pk=None):
        student_to_update = mytable3.objects.get(id=pk)
        serializer = TableSerializer(instance=student_to_update, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Student updated successfully", safe=False)
        return JsonResponse("Failed to update Student")



    def delete(self, request, pk):
        student_to_delete = mytable3.objects.get(id=pk)
        student_to_delete.delete()
        return JsonResponse("Student Deleted Successfully", safe=False)


