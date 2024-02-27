import { Component, computed, inject, input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './product.service';
import { ProductModel } from './product.model';

@Component({
  selector: 'soccer-angle-products-manager',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-manager.component.html',
  styleUrl: './products-manager.component.css',
})
export class ProductsManagerComponent implements OnInit {
  productService = inject(ProductService);
  productList = input.required<ProductModel[]>();

  constructor() {
  }

  ngOnInit() {
    console.log('productList', this.productList());
    this.productService.products.set(this.productList());
  }

  addProduct() {
    const productId = Math.floor(Math.random() * (100 - 4 + 1)) + 4;
    const productName = `product ${productId}`;
    this.productService.addProduct({id: productId, name: productName});
  }

  removeProduct(id: number) {
    this.productService.removeProduct({id, name: `product ${id}`} as ProductModel);
  }

  get products() {
    return this.productService.products;
  }

  productCount =
    computed(() => this.productService.products().length)
}
