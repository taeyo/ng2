import { Component } from '@angular/core'
import { AuthService } from './auth.service'

@Component({
  templateUrl: 'app/user/login.component.html'
})

export class LoginComponent{
    constructor(private authSvc: AuthService) {
        
    }

    login(formValues){
        this.authSvc.loginUser(formValues.userName, formValues.password);
    }

}