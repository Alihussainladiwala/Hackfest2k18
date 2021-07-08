from django.urls import path, include
from . import views
from rest_framework import routers 


router = routers.DefaultRouter()
router.register('languages', views.LanguageView)
router.register('PostFile', views.PostView)
router.register('CM_OS', views.CM_OS_VIEW)
router.register('CLIENTS_OS', views.CLIENT_OS_VIEW)
router.register('CM_VERSION', views.CM_VERSION_VIEW)
router.register('TOTAL', views.TOTAL_VIEW)
router.register('CLIENT_VERSION', views.CLIENT_VERSION_VIEW)
router.register('MEDIA_INFO', views.MEDIA_INFO_VIEW)
router.register('BACKUP_INFO', views.BACKUP_INFO_VIEW)
router.register('LIC_INFO', views.LIC_INFO_VIEW)


urlpatterns = [
        path('',include(router.urls))
]