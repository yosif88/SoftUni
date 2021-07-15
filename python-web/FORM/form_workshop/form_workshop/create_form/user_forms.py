from django import forms
from django.core.validators import MinLengthValidator


def check_for_name(value):
    if not value[0].isupper():
        raise forms.ValidationError('The name must start with an uppercase letter.')


def check_for_age(value):
    if value <= 0:
        raise forms.ValidationError('The age cannot be less than zero.')


def check_for_password(value):
    if any([not x.isalnum() for x in value]):
        raise forms.ValidationError('Enter a valid password.')
    if len(value) < 8:
        raise forms.ValidationError('Enter a valid password.')


class UserForms(forms.Form):
    name = forms.CharField(
        validators=[
            MinLengthValidator(6),
            check_for_name,

        ],
    )

    age = forms.IntegerField(
        widget=forms.NumberInput(),
        validators=[
            check_for_age,
        ],
    )

    email = forms.EmailField(
        widget=forms.EmailInput(),
    )

    password = forms.CharField(
        widget=forms.PasswordInput(),
        validators=[
            check_for_password,
        ],
    )

    text = forms.CharField(
        widget=forms.Textarea(),
    )
