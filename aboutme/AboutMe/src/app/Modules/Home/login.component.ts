import {Component,OnInit} from '@angular/core'
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule, Router,ActivatedRoute } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';
import {AppRoutingModule} from '../../app-routing.module'


import {NgbModule} from '@ng-bootstrap/ng-bootstrap'

@Component({
    selector:'app-login',
    templateUrl:'login.component.html',
   // styleUrls:['login.component.css']
})
@NgModule({
    declarations: [
      LoginComponent
    ],
    imports: [
      BrowserModule,FormsModule,RouterModule
    ],
    providers: []
  })
export class LoginComponent implements OnInit{
    userName:string;
    password:string;
    constructor(private route: ActivatedRoute,
        private router: Router){

    }
    ngOnInit(){

    }
    login(){
        if(this.userName == 'suresh' && this.password=='suresh'){
            //this.router.navigate(['profile']);
            alert('Valid Credentials');
            //routes
           var res= this.router.navigate(['myprofile']);
           res.then(function(greeting) {
            alert('Success: ' + greeting);
          }, function(reason) {
            alert('Failed: ' + reason);
          });
        }
        else{
            alert('Invalid Credentials');
        }
    }
}
