from django.urls import path
from . import views


urlpatterns = [
    path('', views.index, name="index"), # friendly name
    path('process/', views.process, name="processed"), # friendly name
    path('solveSudoku/', views.solveSudoku, name="solve"),
    path('validate/', views.validate, name="validate")
]