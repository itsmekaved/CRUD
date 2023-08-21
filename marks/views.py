from django.shortcuts import render, redirect, get_object_or_404
from django.http.response import Http404, JsonResponse
from .models import employeetable1, loantable1
from .serializers import employeetable1Serializer, loantable1Serializer
from rest_framework.views import APIView
from rest_framework.response import Response


'''def login_page(request):
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
        return JsonResponse("Student Deleted Successfully", safe=False)'''


class EmployeeView(APIView):

    def post(self, request):
        data = request.data
        serializer = employeetable1Serializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Data Added Successfully", safe=False)
        return JsonResponse("Failed to Add Data", safe=False)

    def get_data(self, pk):
        try:
            student = employeetable1.objects.get(customer_id=pk)
            return student
        except employeetable1.DoesNotExist:
            raise Http404

    def get(self, request, pk=None):
        if pk:
            data = self.get_data(pk)
            serializer = employeetable1Serializer(data)
        else:
            data = employeetable1.objects.all()
            serializer = employeetable1Serializer(data, many=True)
        return Response(serializer.data)


    def put(self, request, pk=None):
        student_to_update = employeetable1.objects.get(customer_id=pk)
        serializer = employeetable1Serializer(instance=student_to_update, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Data updated successfully", safe=False)
        return JsonResponse("Failed to update Data")



    def delete(self, request, pk):
        data_to_delete = employeetable1.objects.get(customer_id=pk)
        data_to_delete.delete()
        return JsonResponse("Data Deleted Successfully", safe=False)

class LoanView(APIView):

        def post(self, request):
            data = request.data
            serializer = loantable1Serializer(data=data)

            if serializer.is_valid():
                serializer.save()
                return JsonResponse("Data Added Successfully", safe=False)
            return JsonResponse("Failed to Add Data", safe=False)

        def get_loan_data(self, pk):
            try:
                student = loantable1.objects.get(loan_id=pk)
                return student
            except loantable1.DoesNotExist:
                raise Http404

        def get(self, request, pk=None):
            if pk:
                data = self.get_loan_data(pk)
                serializer = loantable1Serializer(data)
            else:
                data = loantable1.objects.all()
                serializer = loantable1Serializer(data, many=True)
            return Response(serializer.data)

        def create(self, validated_data):
            loan_data = validated_data.pop('employee_table')
            loan = loantable1.objects.create(**validated_data)
            for loann_data in loan_data:
                employeetable1.objects.create(loan=loan, **loann_data)
            return loan

        def put(self, request, pk=None):
            student_to_update = loantable1.objects.get(loan_id=pk)
            serializer = loantable1Serializer(instance=student_to_update, data=request.data, partial=True)

            if serializer.is_valid():
                serializer.save()
                return JsonResponse("Data updated successfully", safe=False)
            return JsonResponse("Failed to update Data")

        def delete(self, request, pk):
            data_to_delete = loantable1.objects.get(loan_id=pk)
            data_to_delete.delete()
            return JsonResponse("Data Deleted Successfully", safe=False)





