import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {HttpClient} from "@angular/common/http";
import {User} from "../../interfaces";

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnInit {

  constructor(private auth: AuthService, private http: HttpClient) {
  }

  feedback_email = ''
  feedback_text = ''

  sendState = {message: '', state: 0}

  feedback_send() {
    this.http.post<{ status: string }>('http://127.0.0.1:5000/feedback',
      {email: this.feedback_email, text: this.feedback_text}).subscribe(
      (resp) => {
        this.sendState = {message: 'Повідомлення відправлено!', state: 1}
        if (resp.status == 'fail') {
          this.sendState = {message: 'Виникла помилка, спробуйте ще раз!', state: 2}
        }

      },
      () => (this.sendState = {message: 'Виникла помилка, спробуйте ще раз!', state: 2})
    )
  }

  isAuthorized() {
    return this.auth.getToken()
  }

  logOut() {
    this.auth.logout()
  }

  ngOnInit(): void {
  }

}
