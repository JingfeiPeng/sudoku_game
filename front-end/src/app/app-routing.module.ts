import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SudukuComponent } from './suduku/suduku.component';
import { SudokuSelectionComponent } from './sudoku-selection/sudoku-selection.component';

const routes: Routes = [
  { path:"more_sudokus", component: SudokuSelectionComponent},
  { path: '**', component: SudukuComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }