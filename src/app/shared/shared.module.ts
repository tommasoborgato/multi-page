import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { SharedComponent } from './shared.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    SharedComponent
  ],
  exports: [ SharedComponent ]
})
export class SharedModule { }
