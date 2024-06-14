import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductType} from "../../../../types/product.type";
import {GetProductsService} from "../../../shared/services/get-products.service";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product: ProductType;

  constructor(private activatedRoute: ActivatedRoute, private getProductsService: GetProductsService) {
    this.product = {
      description: '',
      id: 0,
      image: '',
      price: 0,
      title: ''
    }
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {

        this.getProductsService.getProduct(+params['id'])
          .subscribe({
            next: (data) => {
              this.product = data;
            }
          })
      }
    });
  }

}
