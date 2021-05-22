import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EntryFormComponent} from "./entry-form/entry-form.component";

const routes: Routes = [
  {
    path: '',
    component: EntryFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntryFormRoutingModule { }
