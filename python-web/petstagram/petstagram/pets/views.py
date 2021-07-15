from django.shortcuts import render, redirect

from petstagram.common.forms import CommentForm
from petstagram.common.models import Comment
from petstagram.pets.forms import PetCreateForm, EditPetForm
from petstagram.pets.models import Pet, Like


def pet_all(request):
    pet = Pet.objects.all()
    context = {
        'pets': pet,
    }
    return render(request, 'pets/pet_list.html', context)


def pet_detail(request, pk):
    pet = Pet.objects.get(pk=pk)
    pet.likes_count = pet.like_set.count()
    context = {
        'pet': pet,
        'comment_form':CommentForm(
            initial={           # comment_pet ver 2
                'pet_pk':pk,    #
            }

        ),
        'comments':pet.comment_set.all(),
    }
    return render(request, 'pets/pet_detail.html', context)


# def comment_pet(request, pk):
#     pet = Pet.objects.get(pk=pk)
#     form = CommentForm(request.POST)
#     if form.is_valid():
#         comment = Comment(
#             text = form.cleaned_data['text'],
#             pet=pet,
#         )
#         comment.save()
#
#     return redirect('pet details',pet.id)

def comment_pet(request,pk):

    form = CommentForm(request.POST)
    if form.is_valid():
        form.save()

    return redirect('pet details',pk)


def like_pet(request, pk):
    pet = Pet.objects.get(pk=pk)
    like = Like(
        pet=pet
    )
    like.save()
    return redirect('pet details', pet.id)


def create_pet(request):
    if request.method == 'POST':
        form = PetCreateForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('pets all')
    else:
        form = PetCreateForm()
    context = {
        'form': form
    }
    return render(request, 'pets/pet_create.html', context)


def edit_pet(request, pk):
    pet = Pet.objects.get(pk=pk)

    if request.method == 'POST':
        form = EditPetForm(
            request.POST,
            instance=pet,
        )
        form.save()
        return redirect('pets all')
    else:
        form = EditPetForm(
            instance=pet
        )

    context = {
        'form':form,
        'pet':pet,
    }
    return render(request,'pets/pet_edit.html',context)

def delete_pet(request,pk):
    pet = Pet.objects.get(pk=pk)
    if request.method == 'POST':
        pet.delete()
        return redirect('pets all')
    else:
        context= {
            'pet':pet,
        }
        return render(request,'pets/pet_delete.html',context)