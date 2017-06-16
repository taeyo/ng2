import { Component } from '@angular/core'
import { Router } from '@angular/router'

import { AuthService } from './auth.service'

@Component({
  templateUrl: 'app/user/login.component.html',
  styles: [`
        em { float:right; color:#E05C65; padding-left:10px; }
  `]
})

export class LoginComponent{
    loginInvalid: boolean = false;

    constructor(private authSvc: AuthService, private router: Router) { }

    login(formValues){
        this.authSvc.loginUser(formValues.userName, formValues.password).subscribe(res => {
            if(!res){
                this.loginInvalid = true;
            } else {
                this.router.navigate(['events']);
            }
        });
        
    }

    cancel(){
        this.router.navigate(['events']);
    }
}