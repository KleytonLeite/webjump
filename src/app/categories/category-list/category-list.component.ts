import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


import { ConfigParams } from 'src/app/shared/models/config-params';
import { List } from 'src/app/shared/models/list';
import { Item } from 'src/app/shared/models/item';
import { ProdutosService } from 'src/app/core/produtos.service';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],

})
export class CategoryListComponent implements OnInit {

  imageURL = "../../../assets/";

  id: number = 1;
  color: string;

  config: ConfigParams = {
    color: '',
    gender: '',
  };

  items: Item[] = [];
  lists: List[] = [];
  filterListing: FormGroup;

  constructor(
    private produtosService: ProdutosService,
  ) { }

  ngOnInit(): void {
    this.listProd();
    this.listCategory();    
  }

  public listProd() {
    this.produtosService.listProd(this.id, this.config)
      .subscribe((items: Item[]) => this.items = items)

  }

  public listCategory() {
    this.produtosService.list()
    .subscribe((lists: List[]) => this.lists = lists)
  }

  open(id: number): void {
        this.id = id;
        this.listProd();
      }
  openColor(color: string, gender: string): void {
    this.config.color = color;
    this.config.gender = gender;
    this.listProd();
    this.restartList();
  }

  private restartList(): void {
     this.config.color = '';
     this.items = [];
     this.listProd;
  }
}



// this.produtosList();
//     this.categories()

//     this.activatedRoute.snapshot.params['id'];
//     this.filterListing = this.fb.group({
//       text: [''],
//       category: ['']
//     });

//     this.filterListing.get('text').valueChanges
//     .pipe(debounceTime(400))
//     .subscribe((val: string) => {
//       this.config.search = val;
//       this.restConsultList();
//     })
//     this.filterListing.get('category').valueChanges.subscribe((val: string) => {
//       this.config.field = {type: 'category', value: val};
//       this.restConsultList();
//     })

//     // this.listProdutos();
//   }

//   open(id: number): void {
//     this.router.navigateByUrl('' + id);
//     this.listCategories();
//   }

//   onScroll(){
//     // this.listProdutos();
//   }

//   private restConsultList(): void {
//     this.config.page = 0;
//     this.items = [];
//     this.produtosList;
//   }

//   private produtosList(): void {
//     this.config.page++;
//     this.produtosService.listProd(this.id)
//       .subscribe((items: Item[]) => this.items.push(...items));
//   }


//   private listCategories(): void {
//     this.produtosService.listCategory(this.id)
//     .subscribe(() => this.lists = this.lists);
//   }

//   private categories() {
//     this.produtosService.list()
//     .subscribe(() => this.lists = this.lists)

//   };

//   getCategory() {
//     if(this.lists) {
//       return this.lists
//     }
//     const saveCategory = localStorage.getItem('lists');
//     if(saveCategory) {
//       this.lists = JSON.parse(saveCategory);
//       return this.lists
//     }
//     return undefined;
//   }
