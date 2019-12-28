from django.shortcuts import render
from django.contrib.auth.models import User, Group
from fart.models import Fart, FartType
from rest_framework import viewsets
from fart.serializers import UserSerializer, GroupSerializer, FartSerializer, TypeSerializer


class UserViewSet(viewsets.ModelViewSet):

    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):

    queryset = Group.objects.all()
    serializer_class = GroupSerializer


class FartViewSet(viewsets.ModelViewSet):

    queryset = Fart.objects.all()
    serializer_class = FartSerializer

class TypeViewSet(viewsets.ModelViewSet):

    queryset = FartType.objects.all()
    serializer_class = TypeSerializer