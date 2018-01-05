import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
//import * as firebase from 'firebase/app';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.auth.emailLogin(this.email, this.password);
  }
}
