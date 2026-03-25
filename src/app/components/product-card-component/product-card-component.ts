import { Component, input } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card-component',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './product-card-component.html',
  styleUrl: './product-card-component.css',
})
export class ProductCardComponent {
  product = input.required<Product>();
}
