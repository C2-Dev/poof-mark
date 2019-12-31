from django.shortcuts import render
from django.contrib.auth.models import User, Group
from fart.models import Fart, FartType, Profile
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from fart.serializers import UserSerializer, GroupSerializer, FartSerializer, TypeSerializer, ProfileSerializer


class UserViewSet(viewsets.ModelViewSet):

    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = (IsAuthenticated,)


class ProfileViewSet(viewsets.ModelViewSet):

    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = (IsAuthenticated,)


class GroupViewSet(viewsets.ModelViewSet):

    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = (IsAuthenticated,)


class FartViewSet(viewsets.ModelViewSet):

    queryset = Fart.objects.all()
    serializer_class = FartSerializer
    permission_classes = (IsAuthenticated,)


class TypeViewSet(viewsets.ModelViewSet):

    queryset = FartType.objects.all()
    serializer_class = TypeSerializer
