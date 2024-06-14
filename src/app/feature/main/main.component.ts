import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {Modal} from "bootstrap";

declare var $: any;

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  private modal!: Modal;
  private observable!: Observable<string>
  private subscription: Subscription | null = null;

  ngOnInit(): void {
    this.modal = new Modal('#popup');

    this.observable = new Observable((observer) => {
      setTimeout(() => {
        observer.next('open');
      }, 1000);
    })

    $("#accordion").accordion({
      active: false, collapsible: true
    });

    this.subscription = this.observable.subscribe((param) => {
      console.log(param);
      this.modal.show();
    })
  }

  ngOnDestroy() {
    this.modal.hide();
    this.subscription?.unsubscribe();
  }

}
