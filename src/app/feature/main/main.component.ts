import {Component, ElementRef, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

declare var $: any;

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  @ViewChild('modal', {static: true}) private modalContent!: TemplateRef<HTMLElement>;
  private observable!: Observable<string>
  private subscription: Subscription | null = null;

  constructor(private modalService: NgbModal) {
  }

  ngOnInit(): void {
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
      this.modalService.open(this.modalContent);
    })
  }

  ngOnDestroy() {
    this.modalService.dismissAll();
    this.subscription?.unsubscribe();
  }

  closeModal() {
    this.modalService.dismissAll();
  }
}
