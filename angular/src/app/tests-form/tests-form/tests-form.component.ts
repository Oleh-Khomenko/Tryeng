import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tests-form',
  templateUrl: './tests-form.component.html',
  styleUrls: ['./tests-form.component.scss']
})
export class TestsFormComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) {
  }

  logOut() {
    this.auth.logout()
    this.router.navigate(['/'])
  }

  ngOnInit(): void {
  }

}
