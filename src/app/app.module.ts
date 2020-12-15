import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConvertMilesKmPipe } from './convert-miles-km.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ConvertMilesKmPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
