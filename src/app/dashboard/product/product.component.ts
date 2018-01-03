import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../fileupload/uploadfile.service';
import { Fileupload } from '../fileupload/fileupload';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  selectedFiles: FileList;
  currentFileUpload: Fileupload;
  progress: { percentage: number } = { percentage: 0 };
  fileUploads: Observable<Fileupload[]>;
  constructor(public uploadService: UploadFileService) { }

  ngOnInit() {
    this.fileUploads = this.uploadService.getUploads();

  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  delete(key: string, name: string) {

    this.uploadService.deleteFileDatabase(key);

    this.uploadService.deleteFileStorage(name);
  }
}
