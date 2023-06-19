from django.urls import path
from . import views
urlpatterns = [
    path('', views.index),
    path('login', views.login_page),
    path('teachers/', views.edit, name='edit'),
    path('teachers/update/<str:id>', views.update, name = 'update'),
    path('teachers/delete/<str:id>', views.delete, name = 'delete'),

]
