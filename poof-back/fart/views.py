from django.shortcuts import render
from django.contrib.auth.models import User, Group
from fart.models import Fart, FartType, Profile
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly, IsAdminUser
from fart.serializers import UserSerializer, GroupSerializer, FartSerializer, TypeSerializer, ProfileSerializer
from fart.permissions import IsOwnerOrReadOnly

class UserViewSet(viewsets.ModelViewSet):

    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = (IsAuthenticated, IsOwnerOrReadOnly,)


class ProfileViewSet(viewsets.ModelViewSet):

    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = (IsAuthenticated, IsOwnerOrReadOnly,)


class GroupViewSet(viewsets.ModelViewSet):

    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = (IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly,)


class FartViewSet(viewsets.ModelViewSet):

    queryset = Fart.objects.all()
    serializer_class = FartSerializer
    permission_classes = (IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly,)


class TypeViewSet(viewsets.ModelViewSet):

    queryset = FartType.objects.all()
    serializer_class = TypeSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
