from rest_framework import serializers

from .models import Language
from .models import *
from .models import PostFile
import random

from .analyse import main

print("ALI hussain")
class LanguageSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()

    def get_name(self, obj):
          
          a =random.randint(1,101)
          return a
       

    class Meta:
            model = Language
            fields = ('id','name','paradigm')
        
    
class CM_OS_S(serializers.ModelSerializer):
    
    
    
    
    CM_OS = serializers.SerializerMethodField()
        
    def get_CM_OS(self, obj):
       
        CM_OS1 = data["CM_OS"]
        return CM_OS1

    class Meta:
            model = CM_OS_MODEL
            fields = "__all__" 

class CLIENTS_OS_S(serializers.ModelSerializer):
    CLIENTS_OS = serializers.SerializerMethodField()
        
    def get_CLIENTS_OS(self, obj):
        
        CLIENTS_OS1 = data["CLIENTS_OS"]
        return CLIENTS_OS1

    class Meta:
            model = CLIENTS_OS_MODEL
            fields = "__all__"

class CM_VERSION_S(serializers.ModelSerializer):
    CM_VERSION = serializers.SerializerMethodField()
        
    def get_CM_VERSION(self, obj):
        print("ALI")
        global data 
        data = main()
        CM_VERSION1 = data["CM_VER"]
        return CM_VERSION1

    class Meta:
            model = CM_VERSION_MODEL
            fields = "__all__"    

class CLIENT_VERSION_S(serializers.ModelSerializer):
    CLIENT_VERSION = serializers.SerializerMethodField()
        
    def get_CLIENT_VERSION(self, obj):
        
        CLIENT_VERSION1 = data["CLIENTS_VER"]
        return CLIENT_VERSION1

    class Meta:
            model = CLIENT_VERSION_MODEL
            fields = "__all__"

class MEDIA_INFO_S(serializers.ModelSerializer):
    MEDIA_INFO = serializers.SerializerMethodField()
        
    def get_MEDIA_INFO(self, obj):
        
        MEDIA_INFO1 = data["MEDIA_INFO"]
        return MEDIA_INFO1

    class Meta:
            model = MEDIA_INFO_MODEL
            fields = "__all__"  

class BACKUP_INFO_S(serializers.ModelSerializer):
    BACKUP_INFO = serializers.SerializerMethodField()
        
    def get_BACKUP_INFO(self, obj):
       
        BACKUP_INFO1 = data["BACKUP_INFO"]
        return BACKUP_INFO1

    class Meta:
            model = BACKUP_INFO_MODEL
            fields = "__all__" 

class LIC_INFO_S(serializers.ModelSerializer):
    LIC_INFO = serializers.SerializerMethodField()
        
    def get_LIC_INFO(self, obj):
      
        LIC_INFO1 = data["LIC_INFO"]
        return LIC_INFO1

    class Meta:
            model = LIC_INFO_MODEL
            fields = "__all__"        
                    

class TOTAL_S(serializers.ModelSerializer):

    CM_TOTAL = serializers.SerializerMethodField()
    CLIENTS_TOTAL = serializers.SerializerMethodField()
    CM_WIN_TOTAL = serializers.SerializerMethodField()
    CM_LIN_TOTAL = serializers.SerializerMethodField()
    CM_HPUX_TOTAL = serializers.SerializerMethodField()
    CLIENTS_WIN_TOTAL = serializers.SerializerMethodField()
    CLIENTS_LIN_TOTAL = serializers.SerializerMethodField()
    CLIENTS_HPUX_TOTAL = serializers.SerializerMethodField()
    CLIENTS_VMWARE_TOTAL = serializers.SerializerMethodField()
    CM_OTHERS_TOTAL = serializers.SerializerMethodField()
    CLIENTS_OTHERS_TOTAL = serializers.SerializerMethodField()
    LIC_EXPRESS = serializers.SerializerMethodField()
    LIC_PREMIUM = serializers.SerializerMethodField()
    LIC_CAPACITY = serializers.SerializerMethodField()
    CM_SESSIONS = serializers.SerializerMethodField()

    def get_CLIENTS_TOTAL(self, obj):
        CLIENT_TOTAL = data["CLIENTS_TOTAL"]
        return CLIENT_TOTAL  

    def get_CLIENTS_HPUX_TOTAL(self, obj):
        CLIENTS_HPUX_TOTAL = data["CLIENTS_HPUX_TOTAL"]
        return CLIENTS_HPUX_TOTAL

    def get_CM_TOTAL(self, obj):
        CM_TOTAL = data["CM_TOTAL"]
        return CM_TOTAL

    def get_CM_WIN_TOTAL(self, obj):
        CM_WIN_TOTAL = data["CM_WIN_TOTAL"]
        return CM_WIN_TOTAL
    
    def get_CM_LIN_TOTAL(self, obj):
        CM_LIN_TOTAL = data["CM_LIN_TOTAL"]
        return CM_LIN_TOTAL
    
    def get_CM_HPUX_TOTAL(self, obj):
        CM_HPUX_TOTAL = data["CM_HPUX_TOTAL"]
        return CM_HPUX_TOTAL
    
    def get_CM_OTHERS_TOTAL(self, obj):
        CM_OTHERS_TOTAL = data["CM_OTHERS_TOTAL"]
        return CM_OTHERS_TOTAL

    def get_CLIENTS_WIN_TOTAL(self, obj):
        CLIENTS_WIN_TOTAL = data["CLIENTS_WIN_TOTAL"]
        return CLIENTS_WIN_TOTAL

    def get_CLIENTS_LIN_TOTAL(self, obj):
        CLIENTS_LIN_TOTAL = data["CLIENTS_LIN_TOTAL"]
        return CLIENTS_LIN_TOTAL

    def get_CLIENTS_VMWARE_TOTAL(self, obj):
        CLIENTS_VMWARE_TOTAL = data["CLIENTS_VMWARE_TOTAL"]
        return CLIENTS_VMWARE_TOTAL

    def get_CLIENTS_OTHERS_TOTAL(self, obj):
        CLIENTS_OTHERS_TOTAL = data["CLIENTS_OTHERS_TOTAL"]
        return CLIENTS_OTHERS_TOTAL

    def get_LIC_EXPRESS(self, obj):
        LIC_EXPRESS = data["LIC_EXPRESS"]
        return LIC_EXPRESS

    def get_LIC_PREMIUM(self, obj):
        LIC_PREMIUM = data["LIC_PREMIUM"]
        return LIC_PREMIUM

    def get_LIC_CAPACITY(self, obj):
        LIC_CAPACITY = data["LIC_CAPACITY"]
        return LIC_CAPACITY

    def get_CM_SESSIONS(self, obj):
        CM_SESSIONS = data["CM_SESSIONS"]
        return CM_SESSIONS

    
        

    class Meta:
            model = TOTAL_MODEL_ALL2
            fields = "__all__"                                
        
class PostSerializer(serializers.ModelSerializer):
    class Meta:
            model = PostFile
            fields = "__all__"         


