from django.db import models

import datetime
from django.utils import timezone
from django.db import models
from django.contrib.auth.models import User, Group
from django.core.validators import MaxValueValidator, MinValueValidator


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

