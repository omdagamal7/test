import { Injectable } from '@angular/core';

import { Product } from 'src/app/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
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

  constructor() { }
}
