import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../services/api-call.service';

@Component({
  selector: 'app-suduku',
  templateUrl: './suduku.component.html',
  styleUrls: ['./suduku.component.scss']
})
export class SudukuComponent implements OnInit {
  initialSudoku: string[][] = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]];
  constructor(private apiCall : ApiCallService) { }

  ngOnInit() {
    this.apiCall.solver(this.initialSudoku)
    .subscribe(res => console.log(res))
  }

}
