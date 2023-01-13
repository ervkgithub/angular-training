import { Component, EventEmitter, Output } from '@angular/core';
import * as ProductData from '../user.json';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products = ProductData;
  @Output() productDetail:EventEmitter<any> = new EventEmitter<any>();
  constructor(){
    console.log("products data", this.products.users)
  }
  passData(product:any){
    this.productDetail.emit(product);
  }
}
