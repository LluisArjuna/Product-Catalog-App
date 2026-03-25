import { TestBed } from '@angular/core/testing';

import { ProductService } from './product-service';
import { products } from '../data/products';
import { Product } from '../interfaces/product.interface';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Verifiquen que devuelve la lista completa de productos.', () => {
    const result = service.getProducts();
    expect(result).toEqual(products);
    expect(result.length).toBe(products.length);
  });

  it('Validen la búsqueda de un producto por ID.', () => {
    const testProduct: Product = products[0];
    const result = service.getProductById(testProduct.id);

    expect(result).toEqual(testProduct);
  });

  it('Prueben el comportamiento cuando se busca un ID inexistente.', () => {
    const result = service.getProductById('11');

    expect(result).toBeUndefined();
  });
});

 

