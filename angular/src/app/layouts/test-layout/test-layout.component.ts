import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-test-layout',
  templateUrl: './test-layout.component.html',
  styleUrls: ['./test-layout.component.scss']
})
export class TestLayoutComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) {
  }

  logOut() {
    this.auth.logout()
    this.router.navigate(['/'])
  }

  ngOnInit(): void {
  }

}
