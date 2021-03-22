import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoriesModule } from './categories/categories.module';
import { CategoryListComponent } from './categories/category-list/category-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'categories',
    pathMatch: 'full'
  },
  {
    path: 'categories', 
    children: [
      {
        path: '',
        component: CategoryListComponent,
      },
      {
        path: '1',
        component: CategoryListComponent,
      },
      {
        path: '2',
        component: CategoryListComponent,
      },
      {
        path: '3',
        component: CategoryListComponent,
      },
    ],
  },
  { path: '**', redirectTo: 'categories' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CategoriesModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
