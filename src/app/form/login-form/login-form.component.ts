import { Component, ViewChild } from '@angular/core';
import { Login } from './login';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  // login = {
  //   email:'vijay.kumar@altudo.co',
  //   password:'Test@123'
  // }
  @ViewChild('loginform') formData:any
 // @ViewChild('divChild') formData:any
  login = new Login('test@email.com', 'Test@123')
  onSubmit(){
    console.log(this.formData.value)
  }
}
