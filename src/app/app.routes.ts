import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: ()=> import('./user/user.routes')
  },
  {
    path: 'auth',
    loadChildren: ()=> import('./auth/auth.routes')
  },
  {
    path: 'admin',
    loadChildren: ()=> import('./admin/admin.routes')
  }
];
