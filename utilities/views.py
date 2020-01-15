from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def index(request):
    return render(request, 'utilities/index.html')

def process(request):
    if request.method == 'POST':
        text = request.POST['text']
        print(text)
        proccessed = text.upper()
    return HttpResponse("At Proccess:"+proccessed)