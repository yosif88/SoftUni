from django import forms

from petstagram.core.forms import BootstrapFormMixin
from petstagram.pets.models import Pet


class PetCreateForm(BootstrapFormMixin, forms.ModelForm):
    class Meta:
        model = Pet
        fields = '__all__'


class EditPetForm(PetCreateForm):
    class Meta:
        model = Pet
        fields = '__all__'