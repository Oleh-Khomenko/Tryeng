import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FutureSimpleTestFormComponent} from "./future-simple-test-form/future-simple-test-form.component";

const routes: Routes = [
  {
    path: '',
    component: FutureSimpleTestFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FutureSimpleFormRoutingModule { }
