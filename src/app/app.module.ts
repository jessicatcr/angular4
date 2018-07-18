import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {DataService} from './data.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [DataService], // Criado com ng g s data
  bootstrap: [AppComponent]
})
export class AppModule { }
