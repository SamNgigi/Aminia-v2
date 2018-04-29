from django.conf.urls import include, url
from rest_framework import routers

from .views import (
    PostViewSet,
    RegistrationAPI
)

router = routers.DefaultRouter()
# This is what makes our api route to be /api/posts/
router.register('posts', PostViewSet)

urlpatterns = [
    url("^", include(router.urls)),
    url("^register/$", RegistrationAPI.as_view()),
]
