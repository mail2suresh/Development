import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LoginComponent} from './Modules/Home/login.component'
import { AppComponent } from './app.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import {AppRoutingModule} from './app-routing.module'
import { ProfileComponent } from './Modules/Profile/Profile.Component';

@NgModule({
  declarations: [
    AppComponent,LoginComponent,ProfileComponent
  ],
  imports: [
    BrowserModule,FormsModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
//  "node_modules/bootstrap/dist/css/bootstrap.min.css",
//
//"node_modules/jquery/dist/jquery.min.js",
//"node_modules/bootstrap/dist/js/bootstrap.min.js"