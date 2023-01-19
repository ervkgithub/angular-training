import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonService } from '../common.service';
import * as ProductData from '../user.json';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  //products = ProductData;
  products:any;
  @Output() productDetail:EventEmitter<any> = new EventEmitter<any>();

  //constructor(private http:HttpClient){

  constructor(private _commonService: CommonService){
    console.log("products data", this.products)
  }
  passData(id:any){
   // this.productDetail.emit(product);
    this.productDetail.emit(id);
  }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    // let url = 'https://fakestoreapi.com/products';
    // this.http.get(url).subscribe(data =>{
    //   console.log(data);
    // })
    this._commonService.getAllProducts().subscribe({
      next:(data)=>{
        console.log(data);
        this.products = data;
      },
      error:(error)=>{
        console.log(error);
      }
    })
  }

  
}
