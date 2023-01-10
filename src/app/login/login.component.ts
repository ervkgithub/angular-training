import { Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { MainService } from '../main.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
// export class LoginComponent {
export class LoginComponent implements OnChanges, OnInit, DoCheck, OnDestroy {
  toggle:boolean = true;
  @Input() counter:any;
  constructor(_service:MainService, private loginService:LoginService){
   // let courses = new MainService();
   // console.log("login courses", courses.getCourses()) ;
   console.log("login courses", _service.getCourses()) ;
   console.log("SetCity", loginService.setLoginDetails().city) ;
  }
  textToggle(){
    this.toggle = this.toggle ? false : true;
    // this.toggle = !this.toggle;
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Inside onChanges", this.counter)
  }
  ngOnInit():void{
    console.log("Inside OnInit")
  }
  ngDoCheck(): void {
    console.log("Inside Do check")
  }
  ngOnDestroy(): void {
    console.log("Inside OnDestroy")
  }
}
