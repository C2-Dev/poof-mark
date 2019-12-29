from django.shortcuts import render
from django.contrib.auth.models import User, Group
from fart.models import Fart, FartType, Profile
from rest_framework import viewsets
from fart.serializers import UserSerializer, GroupSerializer, FartSerializer, TypeSerializer, ProfileSerializer


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class ProfileViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer


class FartViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows farts to be viewed or edited.
    """
    queryset = Fart.objects.all()
    serializer_class = FartSerializer


class TypeViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows farts to be viewed or edited.
    """
    queryset = FartType.objects.all()
    serializer_class = TypeSerializer
