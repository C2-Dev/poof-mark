from django.contrib.auth.models import User, Group
from fart.models import Fart, FartType, Profile
from rest_framework import serializers


class ProfileSerializer(serializers.HyperlinkedModelSerializer):
    username = serializers.ReadOnlyField(source='user.username')

    class Meta:
        model = Profile
        fields = ['url', 'username', 'status', 'birth_date', 'avatar']


class UserSerializer(serializers.HyperlinkedModelSerializer):
    profile = ProfileSerializer(read_only=True)

    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups', 'profile']


class GroupSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Group
        fields = ['url', 'name']


class FartSerializer(serializers.HyperlinkedModelSerializer):
    user = UserSerializer(read_only=True)
    ftype = serializers.ReadOnlyField(source='ftype.name')

    class Meta:
        model = Fart
        fields = ['url', 'score', 'ftype', 'smell_scale', 'noise_scale', 'city', 'date_farted', 'user']


class TypeSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = FartType
        fields = ['url', 'name']
