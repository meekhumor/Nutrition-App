from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    age = models.IntegerField(null=True, blank=True)
    health_goals = models.TextField(blank=True)