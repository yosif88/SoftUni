from django.shortcuts import render, redirect

from books_app.book.forms import BookForms
from books_app.book.models import Book


def index(request):
    context = {
        'books': Book.objects.all()
    }
    return render(request, 'index.html', context)


def create_book(request):
    if request.method == 'GET':
        context = {
            'form': BookForms(),
        }
        return render(request, 'create.html', context)
    else:
        form = BookForms(request.POST)
        if form.is_valid():
            form.save()
            return redirect('index')
        context = {
            'form': form,
        }
        return render(request, 'create.html',context)


def update_book(request, pk):
    book = Book.objects.get(pk=pk)
    if request.method == 'GET':
        context = {
            'form':BookForms(initial=book.__dict__)
        }
        return render(request,'edit.html',context)
    else:
        form = BookForms(
            request.POST,
            instance=book,
        )
        if form.is_valid():
            form.save()
            return redirect('index')
        context = {
            'form': form,
        }
        return render(request,'edit.html',context)