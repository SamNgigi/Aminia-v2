from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Post(models.Model):
    content = models.CharField(max_length=100)
    author = models.ForeignKey(
        User,
        related_name="posts",
        on_delete=models.CASCADE
    )
    timestamp = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-updated']

    def __str__(self):
        return self.content
