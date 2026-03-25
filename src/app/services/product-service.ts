import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { products } from '../data/products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProducts(): Product[]{
    return products;
  }

  getProductById(id: string) {
    return products.find(p => p.id === id);
  }
}
