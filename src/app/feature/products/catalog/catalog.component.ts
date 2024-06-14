import {Component, OnInit} from '@angular/core';
import {ProductType} from "../../../../types/product.type";
import {GetProductsService} from "../../../shared/services/get-products.service";


@Component({
  selector: 'catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  products: ProductType[];

  constructor(private getProductsService: GetProductsService) {
    this.products = [];
  }

  ngOnInit(): void {
    this.getProductsService.getProducts()
      .subscribe(
        {
          next: (data) => {
            this.products = data;
          }
        })
  }

}
