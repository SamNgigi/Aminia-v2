"""
A viewsets works like a generic model view in django views. It allows
all types of requests to this endpoint for now.
"""
from rest_framework import viewsets, permissions, generics
from rest_framework.response import Response

from knox.models import AuthToken

from ..models import Post
from .serializers import (
    PostSerializer, CreateUserSerializer, UserSerializer
)


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    permission_classes = [permissions.AllowAny, ]
    serializer_class = PostSerializer


class RegistrationAPI(generics.GenericAPIView):
    serializer_class = CreateUserSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()

        return Response({
            "user": UserSerializer(
                user,
                context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)
        })
