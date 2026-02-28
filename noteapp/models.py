from django.db import models

# Create your models here.

class Note(models.Model):
    cartegory=(
        ("Personal", "Personal"),   
        ("Important", "Important"),
        ("Business", "Business"),
    ) 
   

    title = models.CharField(max_length=100)
    content= models.CharField(max_length=9000)
    catigory = models.CharField(max_length= 15, choices=cartegory, default='Personal')
    created = models.DateTimeField(auto_now_add=True)
    modified= models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.title
    