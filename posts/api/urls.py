from django.conf.urls import include, url
from rest_framework import routers

from .views import (
    PostViewSet,
    RegistrationAPI,
    LoginAPI,
    UserAPI,
)

router = routers.DefaultRouter()

"""
We update our router registration to add a base_name. It is
required if the viewset does not have a questyset attribute
"""
router.register('posts', PostViewSet, 'posts')

urlpatterns = [
    url('^', include(router.urls)),
    url('^auth/register/$', RegistrationAPI.as_view()),
    url('^auth/login/$', LoginAPI.as_view()),
    url('^auth/user/$', UserAPI.as_view()),
]
