from django import forms

from books_app.book.models import Book


class BookForms(forms.ModelForm):
    class Meta:
        model = Book
        fields = '__all__'
