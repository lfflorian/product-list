import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private productService: ProductService) { }

  product : any;
  modalMessage : string;
  display: boolean = false;

  ngOnInit(): void {
    var id = this.route.snapshot.paramMap.get("productId")
    this.productService.getProducts().subscribe((p : any) => {
        this.product = p.find(p =>  p.ProductID == id)
    });
  }

  show() {
    this.modalMessage = "product added successfull!"
    this.display = true;
    setTimeout(() => {
      this.display = false;
    }, 3000);
  }
}
