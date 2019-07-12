import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Category } from '../models/category';
import { PriceRequest } from '../models/price-request';
import { Product } from '../models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories: Category[];
  request: PriceRequest = { category: '', address: '' };
  products: Product;

  constructor(private dataService: DataService) {
    this.dataService.getCategories().subscribe((res: Category[]) => {
      this.categories = res;
    });
  }

  getPrices() {
    this.dataService.getPrices(this.request).subscribe((res: Product) => {
      this.products = res;
    });
  }

  ngOnInit() {
  }

}
