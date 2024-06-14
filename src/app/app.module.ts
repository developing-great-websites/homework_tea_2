import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ProductsModule} from "./feature/products/products.module";
import {MainModule} from "./feature/main/main.module";
import {SharedModule} from "./shared/shared.module";
import {GetProductsService} from "./shared/services/get-products.service";
import { OrderModule } from './feature/order/order.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    ProductsModule,
    MainModule,
    OrderModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [GetProductsService],
  bootstrap: [AppComponent]
})

export class AppModule {

}
