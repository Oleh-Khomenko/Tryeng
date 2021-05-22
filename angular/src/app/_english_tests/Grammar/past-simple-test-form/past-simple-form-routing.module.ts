import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PastSimpleTestFormComponent} from "./past-simple-test-form/past-simple-test-form.component";

const routes: Routes = [
  {
    path: '',
    component: PastSimpleTestFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PastSimpleFormRoutingModule { }
