import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ConfigParams } from '../shared/models/config-params';

@Injectable({
  providedIn: 'root'
})
export class ConfigParamsService {

  constructor() { }

  configureParameters(config: ConfigParams): HttpParams {
    let httpParams = new HttpParams();
    if(config.page) {
      httpParams = httpParams.set('_page', config.page.toString());
    }
    if(config.limite) {
      httpParams = httpParams.set('_limit', config.limite.toString());
    }
    if(config.search) {
      httpParams = httpParams.set('q', config.search);
    }
    if(config.color) {
      httpParams = httpParams.set('q', config.color);
    }
    if(config.gender) {
      httpParams = httpParams.set('q', config.gender);
    }
    if(config.field) {
    httpParams = httpParams.set(config.field.type, config.field.value.toString());
    }
    // httpParams = httpParams.set('_sort', 'id');
    // httpParams = httpParams.set('_order', 'desc');

    return httpParams;
  }

}
