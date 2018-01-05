import { Component, OnInit } from '@angular/core';
import { Fileupload } from '../../fileupload/fileupload';
import { Observable } from 'rxjs/Observable';
import { UploadFileService } from '../../fileupload/uploadfile.service';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  productItem: Fileupload;
  addRecord = false;
  categories: string[] = [
    'veg',
    'nonveg',
    'snacks',
    'others'
  ];

  selectedFiles: FileList;
  currentFileUpload: Fileupload;
  progress: { percentage: number } = { percentage: 0 };
  fileUploads: Observable<Fileupload[]>;
  myform: FormGroup;
  constructor(public uploadService: UploadFileService) { }

  ngOnInit() {
    this.myform = new FormGroup({

      name: new FormControl('', Validators.required),

      price: new FormControl(0, [Validators.required, Validators.pattern('[0-9]')]),

      description: new FormControl('', Validators.required),

      today: new FormControl(),

      category: new FormControl()
    });



  }
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    const file = this.selectedFiles.item(0);
    this.currentFileUpload = new Fileupload();
    if (this.myform.valid) {

      this.currentFileUpload.name = this.myform.value['name'];
      this.currentFileUpload.price = this.myform.value['price'];
      this.currentFileUpload.description = this.myform.value['description'];
      this.currentFileUpload.today = this.myform.value['today'];
      this.currentFileUpload.category = this.myform.value['category'];
    }


    this.currentFileUpload.file = file;

    this.uploadService.pushFileToStorage(this.currentFileUpload, this.progress);


  }




}
