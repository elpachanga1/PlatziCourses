import { Component, OnInit } from '@angular/core';

import { Product } from '../../../core/Models/product.model';
import { ProductsService } from '../../../core/Services/Products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.products = this.productsService.getAllProducts();
  }

  clickProduct(id: number): void {
    console.log('product');
    console.log(id);
  }
}
