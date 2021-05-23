var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"login","loadChildren":"./entry-form/entry-form.module#EntryFormModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/entry-form/entry-form-routing.module.ts","module":"EntryFormRoutingModule","children":[{"path":"","component":"EntryFormComponent"}],"kind":"module"}],"module":"EntryFormModule"}]},{"path":"register","loadChildren":"./register-form/register-form.module#RegisterFormModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/register-form/register-form-routing.module.ts","module":"RegisterFormRoutingModule","children":[{"path":"","component":"RegisterFormComponent"}],"kind":"module"}],"module":"RegisterFormModule"}]},{"path":"","loadChildren":"./main-form/main-form.module#MainFormModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/main-form/main-form-routing.module.ts","module":"MainFormRoutingModule","children":[{"path":"","component":"MainFormComponent"}],"kind":"module"}],"module":"MainFormModule"}]},{"path":"tests-menu","canActivate":["AuthGuard"],"loadChildren":"./tests-form/tests-form.module#TestsFormModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/tests-form/tests-form-routing.module.ts","module":"TestsFormRoutingModule","children":[{"path":"","component":"TestsFormComponent"}],"kind":"module"}],"module":"TestsFormModule"}]},{"path":"tests","component":"TestLayoutComponent","canActivate":["AuthGuard"],"children":[{"path":"tests","redirectTo":"tests-menu","pathMatch":"full"},{"path":"grammar-present-simple-test","component":"PresentSimpleTestFormComponent"},{"path":"grammar-past-simple-test","component":"PastSimpleTestFormComponent"},{"path":"grammar-future-simple-test","component":"FutureSimpleTestFormComponent"},{"path":"articles-test","component":"ArticlesTestFormComponent"},{"path":"vocabulary-test","component":"VocabularyTestFormComponent"}]}],"kind":"module"}]}