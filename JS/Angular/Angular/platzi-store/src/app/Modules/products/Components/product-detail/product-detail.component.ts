import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Product } from '../../../core/Models/product.model';
import { ProductsService } from '../../../core/Services/Products/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
    });
  }

  fetchProduct(id: string): void {
    this.productsService.getProduct(id).subscribe(product => this.product = product);
  }

  createProduct(): any {
    const newProduct: Product = {
      id: '12',
      title: 'nuevo desde angular',
      image: 'assets/images/banner-1.jpg',
      price: 35000,
      description: 'producto'
    };

    this.productsService.createProduct(newProduct).subscribe(product => console.log(product));
  }

  updateProduct(): any {
    const editedProduct: Partial<Product> = {
      title: 'editado desde angular',
      price: 78000,
      description: 'producto editado'
    };

    this.productsService.updateProduct('2', editedProduct).subscribe(product => console.log(product));
  }

  deleteProduct(): void {
    this.productsService.deleteProduct('12').subscribe(response => console.log(response));
  }
}
