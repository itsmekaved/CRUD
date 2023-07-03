from django.contrib import admin
from .models import mytable3


class MytableAdmin(admin.ModelAdmin):
    list_display = ('std_rollno', 'std_name', 'std_branch', 'std_course', 'std_studyhours', 'std_marks')


admin.site.register(mytable3, MytableAdmin)