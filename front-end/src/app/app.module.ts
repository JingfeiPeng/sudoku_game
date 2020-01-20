import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SudukuComponent } from './suduku/suduku.component';
import { HttpClientModule } from '@angular/common/http';
import { NumberMaskDirective } from './masks/number-mask.directive';


@NgModule({
  declarations: [
    AppComponent,
    SudukuComponent,
    NumberMaskDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
