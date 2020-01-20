import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../services/api-call.service';

@Component({
  selector: 'app-suduku',
  templateUrl: './suduku.component.html',
  styleUrls: ['./suduku.component.scss']
})
export class SudukuComponent implements OnInit {
  workingSudoku: string[][] = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
  ];
  checked: boolean[][] = [];
  msg: string = "";
  constructor(private apiCall : ApiCallService) { }

  ngOnInit() {
    this.apiCall.solver(this.workingSudoku)
    .subscribe(res => console.log(res))
    this.updateChecked()
  }

  updateChecked(){
    this.checked = []
    for (let i = 0; i < this.workingSudoku.length; i++){
      this.checked.push(Array(9))
      for (let j = 0; j < this.workingSudoku.length;j++){
        if (this.workingSudoku[i][j] != "."){
          this.checked[i][j] = true;
        } else {
          this.checked[i][j] = false;
        }
      }
    }
  }

  validateCurrentProgress(){
    this.apiCall.validateCurrentProgress(this.workingSudoku)
    .subscribe(res =>{
      if (res){
        this.updateChecked()
        this.msg = '';
      } else {
        this.msg = "you got an invalid entry"
      }
    })
  }

  submitUserSolution(){
    
  }

  updateSudoku(val, row, col){
    val = parseInt(val)
    if (typeof val === 'number' && 0 <= val && val <= 9){
      this.workingSudoku[row][col] = val.toString();
    }
  }

}
