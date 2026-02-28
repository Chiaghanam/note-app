from django.http import Http404
from django.shortcuts import render
from .models import Note
from .serializer import noteserializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt
from django.db.models import Q
# Create your views her

@api_view(['GET'])
def search_notes(request):
    query = request.query_params.get('search', '') 
    if not query:
        return Response([], status=status.HTTP_200_OK)
    notes = Note.objects.filter(Q(title__icontains=query) | Q(content__icontains=query) | Q(catigory__icontains=query))
    serialize = noteserializer(notes, many=True)
    return Response(serialize.data, status=status.HTTP_200_OK)
@api_view(['POST', 'GET'])
def note_list(request):
    if request.method == 'GET':
        notes = Note.objects.all()  
        serialize = noteserializer(notes, many=True)
        return Response(serialize.data, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        serialize = noteserializer(data=request.data)
        if serialize.is_valid():
            serialize.save()
            return Response(serialize.data, status=status.HTTP_201_CREATED)
        return Response(serialize.errors, status=status.HTTP_400_BAD_REQUEST)  


@api_view(['GET','PUT','DELETE'])
def note_edit(request, pk):
    try:
        notes = Note.objects.get(pk=pk)
    except Note.DoesNotExist:
        raise Http404("Note not found")

    if request.method == 'GET':
        serialize = noteserializer(notes)
        return Response(serialize.data, status=status.HTTP_200_OK)
    elif request.method == 'PUT':
        serialize = noteserializer(notes, data=request.data)
        if serialize.is_valid():
            serialize.save()
            return Response(serialize.data, status=status.HTTP_200_OK)
        return Response(serialize.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        notes.delete()
        return Response('delete successful', status=status.HTTP_200_OK)
    return Response('huh?', status=status.HTTP_510_NOT_EXTENDED)
   
    
    
    
