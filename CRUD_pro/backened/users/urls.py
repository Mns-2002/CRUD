from django.contrib import admin
from django.urls import path
from django import views
from .views import UserList, UserDetail, helloworld

urlpatterns = [
    path('users/', UserList.as_view(), name='Users'),
    path('user/<int:pk>/', UserDetail.as_view(), name='User'),
    path('hello/', helloworld, name='hello'),
]
