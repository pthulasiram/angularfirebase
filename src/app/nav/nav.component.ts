import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnChanges {
  name: String = 'Prasuna\'s Kitchen';
  constructor(public authService: AuthService, private router: Router) {
    console.log(this.router.url);
  }

  ngOnInit() {
  }
  ngOnChanges() {
     }

}
