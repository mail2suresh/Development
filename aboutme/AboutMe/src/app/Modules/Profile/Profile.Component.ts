import {Component,OnInit} from '@angular/core'
import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {FormsModule} from '@angular/forms'
import {RouterModule} from '@angular/router'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'

@Component({
selector:'user-profile',
//template:'<div>Helllo</div>'
templateUrl:'Profile.Component.html'
})
export class ProfileComponent implements OnInit{
    profileId:string;
    constructor(private routerModule:RouterModule){

    }
    ngOnInit(){

    }
}