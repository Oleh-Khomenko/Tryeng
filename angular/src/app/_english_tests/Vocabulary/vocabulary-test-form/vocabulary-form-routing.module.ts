import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VocabularyTestFormComponent} from "./vocabulary-test-form/vocabulary-test-form.component";

const routes: Routes = [
  {
    path: '',
    component: VocabularyTestFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VocabularyFormRoutingModule { }
