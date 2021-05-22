import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArticlesTestFormComponent} from "./articles-test-form/articles-test-form.component";

const routes: Routes = [
  {
    path: '',
    component: ArticlesTestFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesFormRoutingModule { }
