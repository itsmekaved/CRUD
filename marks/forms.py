from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.forms import User


# Create your forms here.
class LoginForm(forms.Form):
    username = forms.CharField(max_length=63)
    password = forms.CharField(max_length=63, widget=forms.PasswordInput)


class mytable3(forms.Form):
    std_rollno = forms.CharField(max_length=22)  # Field name made lowercase.
    std_name = forms.CharField(max_length=22)  # Field name made lowercase.
    std_branch = forms.CharField(max_length=14)  # Field name made lowercase.
    std_course = forms.CharField(max_length=15)  # Field name made lowercase.
    std_studyhours = forms.DecimalField(max_digits=4, decimal_places=2)  # Field name made lowercase.
    std_marks = forms.DecimalField(max_digits=5, decimal_places=2)  #
