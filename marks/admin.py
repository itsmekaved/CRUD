from django.contrib import admin
from .models import employeetable1, loantable1


models_list = [employeetable1]
admin.site.register(models_list)

models_list = [loantable1]
admin.site.register(models_list)

