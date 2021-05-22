import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TestsFormComponent} from "./tests-form/tests-form.component";

const routes: Routes = [
  {
    path: '',
    component: TestsFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestsFormRoutingModule { }
