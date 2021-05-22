import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntryFormComponent } from './entry-form/entry-form/entry-form.component';
import { RegisterFormComponent } from './register-form/register-form/register-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MainFormComponent } from './main-form/main-form/main-form.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthService} from "./services/auth.service";
import { TestsFormComponent } from './tests-form/tests-form/tests-form.component';
import {TokenInterceptor} from "./classes/token.interceptor";
import { TestLayoutComponent } from './layouts/test-layout/test-layout.component';
import {ArticlesTestFormComponent} from "./_english_tests/Articles/articles-test-form/articles-test-form/articles-test-form.component";
import {MatRadioModule} from "@angular/material/radio";
import {FutureSimpleTestFormComponent} from "./_english_tests/Grammar/future-simple-test-form/future-simple-test-form/future-simple-test-form.component";
import {PresentSimpleTestFormComponent} from "./_english_tests/Grammar/present-simple-test-form/present-simple-test-form/present-simple-test-form.component";
import {PastSimpleTestFormComponent} from "./_english_tests/Grammar/past-simple-test-form/past-simple-test-form/past-simple-test-form.component";
import {VocabularyTestFormComponent} from "./_english_tests/Vocabulary/vocabulary-test-form/vocabulary-test-form/vocabulary-test-form.component";

@NgModule({
  declarations: [
    AppComponent,
    EntryFormComponent,
    RegisterFormComponent,
    MainFormComponent,
    TestsFormComponent,
    TestLayoutComponent,
    FutureSimpleTestFormComponent,
    PresentSimpleTestFormComponent,
    PastSimpleTestFormComponent,
    VocabularyTestFormComponent,
    ArticlesTestFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
