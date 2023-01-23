import { OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  id: any;
  @Output() backProductListPage: EventEmitter<null> = new EventEmitter<null>();
  productDetail: any;

  constructor(private _commonService: CommonService, private _activeRoute:ActivatedRoute) {
   this.id = this._activeRoute.snapshot.paramMap.get('id');
  }

  backProductList() {
    this.backProductListPage.emit(null);
  }

  ngOnInit(): void {
    this.getSingleProductDetail();
  }

  getSingleProductDetail() {
    this._commonService.getSingleProducts(this.id).subscribe({
      next: (data) => {
        this.productDetail = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  editSingleProductDetail() {
    let obj = this.productDetail;
    obj.title = "Vijay Shirts",

    this._commonService.editSingleProducts(this.id, obj).subscribe({
      next: (updateData) => {
        this.productDetail = updateData;
        console.log(updateData)
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

}
