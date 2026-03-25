import { Routes } from '@angular/router';
import { ProductListComponent } from './pages/product-list-component/product-list-component';
import { ProductDetailComponent } from './pages/product-detail-component/product-detail-component';

export const routes: Routes = [
    {path: '', component: ProductListComponent},
    {path: 'products', component: ProductListComponent},
    {path: 'products/:id', component: ProductDetailComponent},
];
