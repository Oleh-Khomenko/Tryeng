import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PresentSimpleTestFormComponent} from "./present-simple-test-form/present-simple-test-form.component";

const routes: Routes = [
  {
    path: '',
    component: PresentSimpleTestFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresentSimpleFormRoutingModule { }
