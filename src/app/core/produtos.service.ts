import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ConfigParams } from '../shared/models/config-params';
import { List } from '../shared/models/list';
import { Item } from '../shared/models/item';
import { ConfigParamsService } from './config-params.service';



const url = 'http://localhost:3000/'



@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  
  constructor(
    private http: HttpClient,
    private configParamsService: ConfigParamsService
  ) { }



public listProd(id: number, config: ConfigParams): Observable<Item[]> {
const configParams = this.configParamsService.configureParameters(config)
return this.http.get<Item[]>(url + id , {params: configParams});
}

public list(): Observable<List[]> {
  return this.http.get<List[]>(url + 'list');
}


}
