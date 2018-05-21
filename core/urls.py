from django.conf.urls import url
from django.urls import include
from .views import Index, AuthIndex

urlpatterns = [
    url('^auth/', AuthIndex.as_view(), name="auth_index"),
    url('^notprivate/private/', AuthIndex.as_view()),
    url('^', Index.as_view(), name="index"),
]
