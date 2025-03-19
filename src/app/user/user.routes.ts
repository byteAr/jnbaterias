import { Routes } from '@angular/router'


export default [
  {
    path: '',
    loadComponent: ()=> import('./pages/layout/layout.component'),
    children: [
      {
        path: '',
        loadComponent: ()=> import('./pages/home/home.component')
      },
      {
        path:'products',
        loadComponent: ()=> import('./pages/product-list/product-list.component')
      }
    ]
    /* loadComponent: ()=> import('./pages/home/home.component') */
  }
] as Routes
