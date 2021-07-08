from django.shortcuts import render

from rest_framework import viewsets
from .models import *
from .serializers import  LanguageSerializer
from .serializers import  *

class LanguageView(viewsets.ModelViewSet):
    queryset = Language.objects.all()
    serializer_class = LanguageSerializer

class CM_OS_VIEW(viewsets.ModelViewSet):
    queryset = CM_OS_MODEL.objects.all()
    serializer_class = CM_OS_S 

class CLIENT_OS_VIEW(viewsets.ModelViewSet):
    queryset = CLIENTS_OS_MODEL.objects.all()
    serializer_class = CLIENTS_OS_S  

class TOTAL_VIEW(viewsets.ModelViewSet):
    queryset = TOTAL_MODEL_ALL2.objects.all()
    serializer_class = TOTAL_S

class CM_VERSION_VIEW(viewsets.ModelViewSet):
    queryset = CM_VERSION_MODEL.objects.all()
    serializer_class = CM_VERSION_S      

class CLIENT_VERSION_VIEW(viewsets.ModelViewSet):
    queryset = CLIENT_VERSION_MODEL.objects.all()
    serializer_class = CLIENT_VERSION_S

class MEDIA_INFO_VIEW(viewsets.ModelViewSet):
    queryset = MEDIA_INFO_MODEL.objects.all()
    serializer_class = MEDIA_INFO_S


class BACKUP_INFO_VIEW(viewsets.ModelViewSet):
    queryset = BACKUP_INFO_MODEL.objects.all()
    serializer_class = BACKUP_INFO_S

class LIC_INFO_VIEW(viewsets.ModelViewSet):
    queryset = LIC_INFO_MODEL.objects.all()
    serializer_class = LIC_INFO_S

class PostView(viewsets.ModelViewSet):
    queryset = PostFile.objects.all()
    serializer_class = PostSerializer  

# Create your views here.
