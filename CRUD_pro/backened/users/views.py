from django.http import HttpRequest,HttpResponse
from django.shortcuts import render
from .serializers import UserSerializer
from .models import Users
from rest_framework import generics

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset=Users.objects.all()
    serializer_class=UserSerializer

class UserList(generics.ListCreateAPIView):
    queryset=Users.objects.all()
    serializer_class=UserSerializer

    
def helloworld(HttpRequest):
    return HttpResponse("Hello World")