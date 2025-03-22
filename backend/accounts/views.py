
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import authenticate, login, logout
from .serializers import UserSerializer
from .models import CustomUser

@api_view(['POST'])
def register(request):
    username = request.data.get('username')
    password = request.data.get('password')
    email = request.data.get('email')
    user = CustomUser.objects.create_user(username=username, password=password, email=email)
    return Response({'message': 'User created', 'user': UserSerializer(user).data})

@api_view(['POST'])
def login_view(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(request, username=username, password=password)
    if user:
        login(request, user)
        return Response({'message': 'Logged in', 'user': UserSerializer(user).data})
    return Response({'error': 'Invalid credentials'}, status=400)

@api_view(['POST'])
def logout_view(request):
    logout(request)
    return Response({'message': 'Logged out'})