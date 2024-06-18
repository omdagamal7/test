import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productList : Product[] = [
    {
      name : "htc",
      price: 2000,
      category: "ee7",
      id: 1325
    },
    {
      name : "htc",
      price: 2000,
      category: "ee7",
      id: 1325
    },
    {
      name : "htc",
      price: 2000,
      category: "ee7",
      id: 1325
    },
    {
      name : "htc",
      price: 2000,
      category: "ee7",
      id: 1325
    },
  ]
  constructor() { 
  }
}
