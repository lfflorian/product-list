import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  constructor(private productService : ProductService) { }

  products : any;
  
  ngOnInit(): void {
    var result = this.productService.getProducts();

    result.subscribe(p => {
      this.products = p;
    });
  }

}
