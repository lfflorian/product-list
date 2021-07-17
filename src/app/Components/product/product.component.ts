import { Component, Input, OnInit } from '@angular/core';
import { product } from 'src/app/model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product : product;
  constructor() { }
  ngOnInit(): void {
  }
}
