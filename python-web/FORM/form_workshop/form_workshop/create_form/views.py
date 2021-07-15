from django.shortcuts import render, redirect

from form_workshop.create_form.user_forms import UserForms


def post_show_from_data(request):
    if request.method == 'POST':
        form = UserForms(request.POST)
        if form.is_valid():
            fields = ['name', 'age', 'email', 'password', 'text']
            [print(f'{field}: {form.cleaned_data[field]}') for field in fields]

        else:
            print(form.errors)


def get_show_data(request):
    context = {
        'form': UserForms()
    }
    return render(request, 'form_workshop/form.html', context)


def show_form_data(request):
    if request.method == 'POST':
        return post_show_from_data(request)
    else:
        return get_show_data(request)
