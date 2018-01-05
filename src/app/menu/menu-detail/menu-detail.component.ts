import { Component, OnInit, Input } from '@angular/core';
import { Fileupload } from '../../dashboard/fileupload/fileupload';

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.css']
})
export class MenuDetailComponent implements OnInit {

  @Input() data: Fileupload;
  constructor() { }

  ngOnInit() {
  }

}
