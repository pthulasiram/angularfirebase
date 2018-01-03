import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { Fileupload } from '../dashboard/fileupload/fileupload';
import { Observable } from 'rxjs/Observable';
import { UploadFileService } from '../dashboard/fileupload/uploadfile.service';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  total: Number = 0;
  veg_count: Number = 0;
  nonveg_count: Number = 0;
  other_count: Number = 0;
  snacks_count: Number = 0;
  private basePath = '/product';
  filterdMenu: Array<Fileupload> = [];
  fileUploads: Observable<Fileupload[]>;
  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.fileUploads = this.getUploads();

    this.fileUploads.subscribe((data) => { this.filterdMenu = data; }
    );

    this.filterBy('veg');
    this.veg_count = this.filterdMenu.length;

    this.filterBy('nonveg');
    this.nonveg_count = this.filterdMenu.length;

    this.filterBy('snacks');
    this.snacks_count = this.filterdMenu.length;

    this.fileUploads.subscribe((data) => { this.filterdMenu = data; });
    // this.total = this.filterdMenu.length;
  }


  getUploads() {
    this.fileUploads = this.db.list(this.basePath).snapshotChanges().map((actions) => {
      return actions.map((a) => {
        const data = a.payload.val();
        const $key = a.payload.key;
        return { $key, ...data };
      });
    });
    return this.fileUploads;
  }


  filterBy(name: string) {
    if (name === 'all') {
      this.fileUploads.subscribe((data) => { this.filterdMenu = data; });
    } else {
      this.fileUploads.subscribe((data) => { this.filterdMenu = data.filter(menu => menu.category === name); });

      // this.filterdMenu = this.menus.filter(menu => menu.category === name);
    }
  }
}
