from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from utilities.sudoku.solver import SudokuSolver
from utilities.sudoku.validater import Validator
import json
import ast

# Create your views here.

pazzles = [
    [
        ["5","3",".",".","7",".",".",".","."],
        ["6",".",".","1","9","5",".",".","."],
        [".","9","8",".",".",".",".","6","."],
        ["8",".",".",".","6",".",".",".","3"],
        ["4",".",".","8",".","3",".",".","1"],
        ["7",".",".",".","2",".",".",".","6"],
        [".","6",".",".",".",".","2","8","."],
        [".",".",".","4","1","9",".",".","5"],
        [".",".",".",".","8",".",".","7","9"]
    ],
    [
        [".",".",".","3","4",".",".",".","."],
        [".",".","6",".",".","8",".","5","4"],
        [".","5",".","6","9",".",".","2","."],
        [".",".","3","7",".",".",".",".","."],
        [".",".",".","2",".","6",".",".","8"],
        ["1",".",".",".",".",".",".",".","."],
        ["8","9",".",".",".",".",".","1","7"],
        ["6",".",".","5",".","9",".",".","."],
        [".","2","4",".","3",".",".",".","."]
    ]
]

def index(request):
    return render(request, 'utilities/index.html')


@csrf_exempt 
def fetchsudukus(request):
    return HttpResponse(json.dumps(pazzles))

    
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
    res = validator.isValidSudoku(sudoku)
    print(res)
    return HttpResponse(json.dumps(res))