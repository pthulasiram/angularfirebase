import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  showMenuList = true;
  constructor() { }

  ngOnInit() {
  }

  flip() {
    this.showMenuList = (this.showMenuList) ? false : true;
  }
}
