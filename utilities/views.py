from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from utilities.sudoku.solver import SudokuSolver
from utilities.sudoku.validater import Validator
import json
import ast

# Create your views here.

def index(request):
    return render(request, 'utilities/index.html')


@csrf_exempt 
def process(request):
    if request.method == 'POST':
        text = request.POST['text']
        proccessed = text.upper()
    return HttpResponse("At Proccess:"+proccessed)

    
@csrf_exempt 
def solveSudoku(request): 
    if request.method == 'POST':
        body  = json.loads(request.body)
        data = body["pazzle"]
        # sudoku = ast.literal_eval(data)
        sudoku = data

    solver = SudokuSolver()
    solver.solveSudoku(sudoku)

    return HttpResponse(json.dumps(sudoku))

@csrf_exempt
def validate(request):
    if request.method == 'POST':
        body  = json.loads(request.body)
        sudoku = body["pazzle"]
    
    validator = Validator()
    return HttpResponse(validator.isValidSudoku(sudoku))