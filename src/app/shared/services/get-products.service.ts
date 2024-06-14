import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductType} from "../../../types/product.type";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GetProductsService {

  private products: ProductType[];

  constructor(private http: HttpClient) {
    this.products = [];
  }

  getProducts(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>(environment.apiUrl + 'tea');
  }

  getProduct(id: number): Observable<ProductType> {
    return this.http.get<ProductType>(environment.apiUrl + `tea?id=${id}`);
  }

  createOrder(data:
                {
                  name: string,
                  last_name: string,
                  phone: string,
                  country: string,
                  zip: string,
                  product: string,
                  address: string,
                  comment: string,
                }) {
    return this.http.post<{ success: number, message?: string }>(environment.apiUrl + `order-tea`, data);
  }

}
