from django.urls import path
from form_workshop.create_form.views import show_form_data

urlpatterns = [
    path('', show_form_data, name='show form')
]