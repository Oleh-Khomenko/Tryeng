import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.scss']
})
export class EntryFormComponent implements OnInit {
  form!: FormGroup

  aSub!: Subscription;

  constructor(private auth: AuthService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(4)])
    })
    this.route.queryParams.subscribe((params) => {
      if (params['registered']) {

      } else if (params['accessDenied']) {

      }
    })
  }

  ngOnDestroy(): void {
    if (this.aSub) {
      this.aSub.unsubscribe()
    }
  }

  loginIn() {
    this.form.disable()

    this.aSub = this.auth.login(this.form.value).subscribe(
      () => (
        this.router.navigate(['/tests-menu'])
      ),
      error => {
        console.warn(error)
        this.form.enable()
      })
  }
}


// loginIn() {
//    this.areWeWaiting = true
//    this.httpService.postData(
//      'login',
//      {
//        email: this.email,
//        password: this.password
//      }).subscribe(
//      resp => {
//        this.areWeWaiting = false
//        this.response = JSON.parse(JSON.stringify(resp))
//        if (this.response.data == 'ok') {
//          this.router.navigate([''])
//        }
//        else {
//          this.error = 'Incorrect login or password!'
//        }
//
//        this.checkResp()
//      },
//      error => {
//        this.areWeWaiting = false
//        console.log(error)
//      }
//    );
//  }
//
//  checkResp() {
//    console.clear()
//    console.log(this.response.data)
//    // for (let i = 0; i < this.response.length; i++) {
//    //   console.log(`${i}: ${this.response[i]}`)
//    // }
//  }
