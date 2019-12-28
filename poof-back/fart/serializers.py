from django.contrib.auth.models import User, Group
from fart.models import Fart, FartType, Profile
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    status = serializers.ReadOnlyField(source='profile.status')
    birth_date = serializers.ReadOnlyField(source='profile.birth_date')
    avatar = serializers.ImageField(source='profile.avatar')

    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups', 'status', 'birth_date', 'avatar']


class ProfileSerializer(serializers.HyperlinkedModelSerializer):
    username = serializers.ReadOnlyField(source='user.username')

    class Meta:
        model = Profile
        fields = ['url', 'username', 'status', 'birth_date', 'avatar']


class GroupSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Group
        fields = ['url', 'name']


class FartSerializer(serializers.HyperlinkedModelSerializer):
    username = serializers.ReadOnlyField(source='user.username')
    ftype = serializers.ReadOnlyField(source='ftype.name')

    class Meta:
        model = Fart
        fields = ['url', 'username', 'score', 'ftype', 'smell_scale', 'noise_scale', 'city', 'date_farted']


class TypeSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = FartType
        fields = ['url', 'name']
