import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  @Input() productDetail:any;
  @Output() backProductListPage:EventEmitter<null> = new EventEmitter<null>();
  backProductList(){
    this.backProductListPage.emit(null);
  }
}
