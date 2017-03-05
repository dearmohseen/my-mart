import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { DxTextBoxModule, DevExtremeModule } from 'devextreme-angular';
=======
>>>>>>> branch 'master' of https://github.com/dearmohseen/angular.git
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
<<<<<<< HEAD
    HttpModule,
    DxTextBoxModule,
    DevExtremeModule
=======
    HttpModule
>>>>>>> branch 'master' of https://github.com/dearmohseen/angular.git
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    LoginComponent
  ]
})
export class AppModule { }
