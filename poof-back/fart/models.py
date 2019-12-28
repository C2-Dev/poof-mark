from django.db import models
import datetime
from django.utils import timezone
from django.contrib.auth.models import User, Group
from django.core.validators import MaxValueValidator, MinValueValidator
from django.db.models.signals import post_save
from django.dispatch import receiver


class Profile(models.Model):
    user = models.OneToOneField(User, related_name='profile', on_delete=models.CASCADE)
    status = models.TextField(max_length=100, blank=True,
                              default='The more you poof the better you feel')
    birth_date = models.DateField(null=True, blank=True)
    avatar = models.ImageField(upload_to='avatars/', blank=True,
                               default='avatars/default_avatar.png')

    def __str__(self):
        return str(self.user.username)


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    """Creates a profile when user is created."""

    if created:
        Profile.objects.create(user=instance)


@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    """Saves profile info when user is updated."""

    instance.profile.save()


class FartType(models.Model):
    name = models.CharField(max_length=32)

    def __str__(self):
        return self.name


class Fart(models.Model):
    user = models.ForeignKey(User, related_name='fart', on_delete=models.CASCADE)
    city = models.TextField(blank=True, null=True, default='Flavor Town')
    state = models.TextField(blank=True, null=True, default='BFE')
    score = models.PositiveIntegerField(default=1, validators=[MinValueValidator(1), MaxValueValidator(9999)])
    ftype = models.ForeignKey(FartType, related_name='fartType', on_delete=models.CASCADE)
    noise_scale = models.PositiveIntegerField(default=1, validators=[MinValueValidator(1), MaxValueValidator(10)])
    smell_scale = models.PositiveIntegerField(default=1, validators=[MinValueValidator(1), MaxValueValidator(10)])
    exposures = models.PositiveIntegerField(default=1, validators=[MinValueValidator(1), MaxValueValidator(100000000)])
    date_farted = models.DateTimeField(default=timezone.now)
    date_entered = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.id)
