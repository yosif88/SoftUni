from django.db import models
from django.core.validators import ValidationError, MinValueValidator


class Book(models.Model):
    title = models.CharField(
        max_length=20,
    )
    pages = models.IntegerField(
        default=0,
        validators=[
            MinValueValidator(1)
        ]
    )
    description = models.CharField(
        max_length=100,
    )
    author = models.CharField(
        max_length=20,
    )
