import { Component } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  toggle:boolean = true;
  constructor(_service:MainService){
   // let courses = new MainService();
   // console.log("login courses", courses.getCourses()) ;
   console.log("login courses", _service.getCourses()) ;
  }
  textToggle(){
    this.toggle = this.toggle ? false : true;
    // this.toggle = !this.toggle;
  }
}
