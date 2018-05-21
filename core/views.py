from django.views.generic import TemplateView
from django.contrib.auth.mixins import LoginRequiredMixin

class Index(TemplateView):
  template_name = "index.html"

class AuthIndex(LoginRequiredMixin, TemplateView):
  template_name = "index.html"
