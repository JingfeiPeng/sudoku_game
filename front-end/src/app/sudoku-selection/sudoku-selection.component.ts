import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiCallService } from '../services/api-call.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sudoku-selection',
  templateUrl: './sudoku-selection.component.html',
  styleUrls: ['./sudoku-selection.component.scss']
})
export class SudokuSelectionComponent implements OnInit, OnDestroy {
  sudokuList:string[][][];
  subscription: Subscription;
  sudokuChosenIndex: number;
  constructor(private api: ApiCallService, private router: Router) { }

  ngOnInit() {
    this.subscription = this.api.fetchAvaliableSudokus()
    .subscribe(res => this.sudokuList = res)
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  changeSelection(sudokuChosen){
    this.sudokuChosenIndex = sudokuChosen;
  }

  selectThisSudoku(){
    this.router.navigate([''], {queryParams:{id: this.sudokuChosenIndex}});

  }
}
