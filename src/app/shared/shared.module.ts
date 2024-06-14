import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LimitSymbolsPipe} from "./pipes/limit-symbols.pipe";
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LimitSymbolsPipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LimitSymbolsPipe
  ]
})
export class SharedModule { }
