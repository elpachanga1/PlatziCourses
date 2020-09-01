import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../Models/product.model';

import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) { }

  getAllProducts(): any {
    return this.http.get<Product[]>(`${environment.url}/products/`);
  }

  getProduct(id: string): any {
    return this.http.get<Product>(`${environment.url}/products/${id}`);
  }

  createProduct(product: Product): any {
    return this.http.post(`${environment.url}/products/`, product);
  }

  updateProduct(id: string, product: Partial<Product>): any {
    return this.http.put<Product>(`${environment.url}/products/${id}`, product);
  }

  deleteProduct(id: string): any {
    return this.http.delete(`${environment.url}/products/${id}`);
  }
}
