import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {
  value:any="one way data binding";
  name:any= "input name";
  colspan:number= 2;
  arialabel:String="data td";
  pClass="redColor greenColor blueColor";
  form:any={
    name:"vijay Kumar",
    email:"vijay.kumar@altudo.co",
    mobile:"9953038020"
  }
  updateValue(){
    console.log("update value clicked");
  }
  keyPressed(event:any){
    console.log("enter key pressed", event);
  }
  keyUP(){
    console.log("enter key pressed");
  }
  keyUP2(value:any){
    console.log("enter key pressed", value);
  }
  saveForm(){
    console.log("Form data", this.form);
  }
}
