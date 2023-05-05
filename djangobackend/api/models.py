from django.db import models

# Create your models here.
class Todo(models.Model):
  taskname = models.CharField(max_length=100)
  deadline = models.CharField(max_length=100)
