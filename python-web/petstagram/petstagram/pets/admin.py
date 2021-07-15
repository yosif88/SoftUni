from django.contrib import admin

from petstagram.pets.models import Pet


@admin.register(Pet)
class PetAdmin(admin.ModelAdmin):
    list_display = ['name', 'type', 'age','likes_count']

    def likes_count(self, obj):
        return obj.like_set.count()