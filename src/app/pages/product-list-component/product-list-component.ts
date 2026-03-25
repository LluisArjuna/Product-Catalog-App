import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { ProductCardComponent } from '../../components/product-card-component/product-card-component';

@Component({
  selector: 'app-product-list-component',
  imports: [ProductCardComponent],
  templateUrl: './product-list-component.html'
})
export class ProductListComponent {
  private readonly productService = inject(ProductService);
  products = this.productService.getProducts();
}
