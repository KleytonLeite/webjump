import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FooterComponent } from '../shared/components/footer/footer.component';
import { MenuComponent } from '../shared/components/menu/menu.component';
import { MaterialModule } from '../shared/material/material.module';
import { CategoryListComponent } from './category-list/category-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';




@NgModule({
  declarations: [CategoryListComponent, MenuComponent, FooterComponent],
  imports: [
    CommonModule,
    MaterialModule,
    MatGridListModule,
    ReactiveFormsModule,
    FormsModule,    
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    InfiniteScrollModule,

  
  ],
  exports: [
    CategoryListComponent,
    MenuComponent, 
    FooterComponent,
    InfiniteScrollModule,
  ]
})
export class CategoriesModule { }
