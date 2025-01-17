from django.contrib.auth.models import AbstractUser
from django.db import models


# Create your models here.
class CustomUser(AbstractUser):
    name = models.CharField(max_length=255, blank=True, null=True)  # Custom name field
    profile_picture = models.ImageField(upload_to='profile_pictures/', blank=True, null=True)  # Profile
