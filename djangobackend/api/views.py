from .models import Todo
from .serializers import TodoSerializer
from rest_framework.generics import ListAPIView

# Create your views here.
class TodoList(ListAPIView):
  queryset = Todo.objects.all()
  serializer_class = TodoSerializer
