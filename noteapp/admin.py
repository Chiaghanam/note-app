from django.contrib import admin
from .models import Note
# Register your models here.
class Noteadmin(admin.ModelAdmin):
    list_display =['title','catigory','created','modified']
admin.site.register(Note, Noteadmin)