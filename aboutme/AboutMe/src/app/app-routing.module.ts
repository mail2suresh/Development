import { AppComponent } from "./app.component";
import { Component } from "../../node_modules/@angular/core";
import {RouterModule,Routes,Router} from '@angular/router';
import {ProfileComponent}  from "./Modules/Profile/Profile.Component";
import {LoginComponent}  from "./Modules/Home/login.component";
import {NgModule} from '@angular/core';

const routes:Routes = [
{path:'myprofile',component:ProfileComponent},
{path:'login',component:LoginComponent}
];

@NgModule(
    {
        imports:[RouterModule.forRoot(routes)],
        exports:[RouterModule]
    }
)

export class AppRoutingModule{
    
}
