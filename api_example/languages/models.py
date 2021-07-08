from django.db import models
import random

# Create your models here.

class Language(models.Model):
    name = models.CharField(max_length=50)
    paradigm = models.CharField(max_length=50)


class CM_OS_MODEL(models.Model):
   CM_OS = models.CharField(max_length=1000)

class CLIENTS_OS_MODEL(models.Model):
   CLIENTS_OS = models.CharField(max_length=5000) 

class TOTAL_MODEL_ALL2(models.Model):
   CM_TOTAL = models.CharField(max_length=50)
   CLIENTS_TOTAL = models.CharField(max_length=50)
   CM_WIN_TOTAL = models.CharField(max_length=50)
   CM_LIN_TOTAL = models.CharField(max_length=50)
   CM_HPUX_TOTAL = models.CharField(max_length=50)
   CM_OTHERS_TOTAL = models.CharField(max_length=50)
   CLIENTS_WIN_TOTAL = models.CharField(max_length=50)
   CLIENTS_HPUX_TOTAL = models.CharField(max_length=50)
   CLIENTS_LIN_TOTAL = models.CharField(max_length=50)
   CLIENTS_VMWARE_TOTAL = models.CharField(max_length=50)
   CLIENTS_OTHERS_TOTAL = models.CharField(max_length=50)
   LIC_EXPRESS = models.CharField(max_length=50)
   LIC_PREMIUM = models.CharField(max_length=50)
   LIC_CAPACITY = models.CharField(max_length=50)
   CM_SESSIONS = models.CharField(max_length=50)

class CM_VERSION_MODEL(models.Model):
   CM_VERSION = models.CharField(max_length=1000)  

class CLIENT_VERSION_MODEL(models.Model):
   CLIENT_VERSION = models.CharField(max_length=1000) 

class MEDIA_INFO_MODEL(models.Model):
   MEDIA_INFO = models.CharField(max_length=5000) 

class BACKUP_INFO_MODEL(models.Model):
   BACKUP_INFO = models.CharField(max_length=5000)

class LIC_INFO_MODEL(models.Model):
   LIC_INFO = models.CharField(max_length=10000)
 #  HPUX = models.CharField(max_length=50)
 #  VmwareHost = models.CharField(max_length=50)"""



class PostFile(models.Model):
    telemetryFile = models.FileField()


  


    





