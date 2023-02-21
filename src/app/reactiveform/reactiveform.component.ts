import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss'],
})
export class ReactiveformComponent {
  userForm = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
    email: new FormControl(''),
    mobile: new FormControl(''),
    address: new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
      country: new FormControl('')
    }),
  });
  submitForm() {
    console.log('userForm', this.userForm.value);
  }
  loadData(){
    
    this.userForm.setValue({
      name: "abc",
      age: "30",
      email: "vija@gg.com",
      mobile: "09999999999",
      address: {
        city: "bhopal",
        state: "bihar",
        country: "india"
      }
    })

    // If there is no data for address

    // this.userForm.patchValue({
    //   name: "abc",
    //   age: "30",
    //   email: "vija@gg.com",
    //   mobile: "09999999999",
    //   // address: {
    //   //   city: "bhopal",
    //   //   state: "bihar",
    //   //   country: "india"
    //   // }
    // })

  }
}
