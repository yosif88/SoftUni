from django.urls import path

from books_app.book.views import index, create_book, update_book

urlpatterns = [
    path('', index,name='index'),
    path('create/',create_book, name='create'),
    path('update/<int:pk>', update_book,name='edit'),
]