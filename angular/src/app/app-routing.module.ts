import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TestLayoutComponent} from "./layouts/test-layout/test-layout.component";
import {PresentSimpleTestFormComponent} from "./_english_tests/Grammar/present-simple-test-form/present-simple-test-form/present-simple-test-form.component";
import {PastSimpleTestFormComponent} from "./_english_tests/Grammar/past-simple-test-form/past-simple-test-form/past-simple-test-form.component";
import {FutureSimpleTestFormComponent} from "./_english_tests/Grammar/future-simple-test-form/future-simple-test-form/future-simple-test-form.component";
import {ArticlesTestFormComponent} from "./_english_tests/Articles/articles-test-form/articles-test-form/articles-test-form.component";
import {VocabularyTestFormComponent} from "./_english_tests/Vocabulary/vocabulary-test-form/vocabulary-test-form/vocabulary-test-form.component";
import {AuthGuard} from "./classes/auth.guard";

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./entry-form/entry-form.module').then(m => m.EntryFormModule),
  },
  {
    path: 'register',
    loadChildren: () => import('./register-form/register-form.module').then(m => m.RegisterFormModule),
  },
  {
    path: '',
    loadChildren: () => import('./main-form/main-form.module').then(m => m.MainFormModule),
  },
  {
    path: 'tests-menu',
    canActivate: [AuthGuard],
    loadChildren: () => import('./tests-form/tests-form.module').then(m => m.TestsFormModule),
  },
  {
    path: 'tests',
    component: TestLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {path: 'tests', redirectTo: 'tests-menu', pathMatch: 'full'},
      {path: 'grammar-present-simple-test', component: PresentSimpleTestFormComponent},
      {path: 'grammar-past-simple-test', component: PastSimpleTestFormComponent},
      {path: 'grammar-future-simple-test', component: FutureSimpleTestFormComponent},
      {path: 'articles-test', component: ArticlesTestFormComponent},
      {path: 'vocabulary-test', component: VocabularyTestFormComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
