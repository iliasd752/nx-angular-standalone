import { Injectable, signal } from '@angular/core';
import { ProductModel } from './product.model';


@Injectable({
  providedIn: 'root'
  })

export class ProductService {

  products = signal<ProductModel[]>([]);
  constructor() {
  }

  addProduct(product: ProductModel) {
    this.products.update(products => [...products, product]);
  }

  removeProduct(product: ProductModel) {
    this.products.update(products => products.filter(p => p.id !== product.id));
  }
}
