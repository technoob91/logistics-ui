import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { PriceRequest } from '../models/price-request';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = environment.serverUrl;
  constructor(private http: HttpClient) { }
  
  getCategories() {
    return this.http.get(this.url + '/category/list');
  }

  getPrices(params: PriceRequest){
    return this.http.post(this.url+'/price/get_prices', params);
  }
}
