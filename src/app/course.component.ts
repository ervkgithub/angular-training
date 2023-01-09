import { Component } from "@angular/core";
import { MainService } from "./main.service";

@Component({
    selector:'course',
    template:'<h1>Course component</h1>',
})

export class CourseComponent{
    constructor(_service:MainService){
       // let courses = new MainService();
       // console.log("courses courses", courses.getCourses()) ;
       console.log("courses courses", _service.getCourses()) ;
      }
}