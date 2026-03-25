import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-detail-component',
  imports: [CurrencyPipe],
  templateUrl: './product-detail-component.html'
})
export class ProductDetailComponent {
  private readonly productService = inject(ProductService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  productId = toSignal(this.route.paramMap.pipe(map(params => params.get('id'))));

  product = computed(() => {
    const id = this.productId();
    if (!id) return undefined;
    const product = this.productService.getProductById(id);
    return product;
  });

  goBack() {
    this.router.navigate(['/products']);
  }
}
