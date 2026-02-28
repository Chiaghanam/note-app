from django.urls import path
from . import views
urlpatterns = [
    path('note_list/', views.note_list, name='note_list'),
    path('note_edit/<int:pk>/', views.note_edit, name='note_edit'),
    path('search/', views.search_notes, name='search_notes'),

]