import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from 'rxjs';
import {GetProductsService} from "../../shared/services/get-products.service";


@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {
  private subscription: Subscription | null = null;
  private subscriptionOrder: Subscription | null = null;
  public visibleForm: boolean = false;
  public visibleTextSuccess: boolean = true;
  public visibleText: boolean = true;

  saveOrderForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern(/^([A-Za-z])|([А-Яа-я])$/)]),
    last_name: new FormControl('', [Validators.required, Validators.pattern(/^([A-Za-z])|([А-Яа-я])$/)]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/(^[+]?\d{11})$/)]),
    country: new FormControl(''),
    zip: new FormControl(''),
    product: new FormControl(''),
    address: new FormControl('', [Validators.required, Validators.pattern(/^[а-яА-Яa-zA-Z0-9\s-\/]+$/)]),
    comment: new FormControl('')
  });

  get name() {
    return this.saveOrderForm.get('name');
  }

  get lastName() {
    return this.saveOrderForm.get('lastName');
  }

  get phone() {
    return this.saveOrderForm.get('phone');
  }

  get address() {
    return this.saveOrderForm.get('address');
  }


  constructor(private activatedRoute: ActivatedRoute, private productService: GetProductsService) {

  }

  ngOnInit(): void {
    this.subscription = this.activatedRoute.params.subscribe((params) => {
      if (params['title']) {
        console.log(params);
        this.saveOrderForm.patchValue({
          product: params['title'],
        });
        this.saveOrderForm.get('product')?.disable();
      }
    });
  }


  saveOrder() {
    this.subscriptionOrder = this.productService.createOrder({
      name: this.saveOrderForm.get('name')?.value as string,
      last_name: this.saveOrderForm.get('last_name')?.value as string,
      phone: this.saveOrderForm.get('phone')?.value as string,
      country: this.saveOrderForm.get('country')?.value as string,
      zip: this.saveOrderForm.get('zip')?.value as string,
      product: this.saveOrderForm.get('product')?.value as string,
      address: this.saveOrderForm.get('address')?.value as string,
      comment: this.saveOrderForm.get('comment')?.value as string,
    })
      .subscribe(response => {
        if (response.success === 1) {
          this.visibleForm = true;
          this.visibleTextSuccess = false;
        } else {
          console.log(response.message)
          this.saveOrderForm.reset();
          this.visibleText = false;
        }
      })

  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
    this.subscriptionOrder?.unsubscribe();
  }


}
