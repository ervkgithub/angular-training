import { Component } from '@angular/core';
import { Answer } from './enum';

enum Direction {
  left,
  right,
  top,
  bottom
}

interface testObj {
  right:Number,
  left:String,
  up:Number,
  down:any
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'angular-training';
  title : boolean = true;
  hideChild:boolean = true;
  direction = Direction;
  answer = Answer;
  // productdetail:any = null;
  ProductId:any = null;
  toggle(){
    this.hideChild = !this.hideChild;
  }
  incrFun(){
    this.count++;
  }
  decrFun(){
    this.count--;
  }
  hdChild(){
    this.hideChild = !this.hideChild;
  }
  arr = [
    {
      right:1,
      left:"2",
      up:3,
      down:4
    }
  ]
  count:number= 0;
  constructor(){
    console.log(this.title);
    this.sum(25, "test", 5);
    console.log("direction", this.direction)
    console.log("Answer", this.answer)
    // console.log(arr.right)
  }
  sum = (a:Number, b:String, c:any ) =>{console.log("arrow function", a, b,c)}

  getData(event:any){
    console.log(event)
    this.ProductId=event;
  }

}
