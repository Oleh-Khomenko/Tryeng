import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ArticlesFormRoutingModule} from "./articles-form-routing.module";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ArticlesFormRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ArticlesTestFormModule { }
