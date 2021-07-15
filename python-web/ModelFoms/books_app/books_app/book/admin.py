from django.contrib import admin

from books_app.book.models import Book


@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    pass