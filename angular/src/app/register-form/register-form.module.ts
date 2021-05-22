import {NgModule, OnDestroy, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegisterFormRoutingModule} from "./register-form-routing.module";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RegisterFormRoutingModule
  ]
})
export class RegisterFormModule implements OnInit, OnDestroy{
  form!: FormGroup

  constructor(private auth: AuthService) {
  }

  ngOnDestroy(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(4)])
    })
  }

  ngOnInit(): void {
  }

  register(){
    this.auth.register(this.form.value)
  }
}
