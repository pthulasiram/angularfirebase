import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebase from 'firebase';

import { Fileupload } from './fileupload';
import { Observable } from 'rxjs/Observable';
import { debuglog } from 'util';

@Injectable()
export class UploadFileService {
  public addOprStatus: boolean = false;
  fileUploads: Observable<Fileupload[]>;
  constructor(private db: AngularFireDatabase) { }

  private basePath = '/product';

  pushFileToStorage(fileUpload: Fileupload, progress: { percentage: number }) {
    this.addOprStatus = false;
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/${fileUpload.name}`).put(fileUpload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        // in progress
        const snap = snapshot as firebase.storage.UploadTaskSnapshot;
        progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
      },
      (error) => {
        // fail
        console.log(error);
      },
      () => {
        // success
        fileUpload.url = uploadTask.snapshot.downloadURL;
        fileUpload.name = fileUpload.name;
        fileUpload.price = fileUpload.price;
        fileUpload.category = fileUpload.category;
        fileUpload.today = fileUpload.today;
        fileUpload.description = fileUpload.description;
        this.saveFileData(fileUpload);
        this.addOprStatus = true;

      }
    );
  }

  private saveFileData(fileUpload: Fileupload) {
    this.db.list(`${this.basePath}/`).push(fileUpload);

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

  deleteFileUpload(fileUpload: Fileupload) {
    this.deleteFileDatabase(fileUpload.$key)
      .then(() => {
        this.deleteFileStorage(fileUpload.name);
      })
      .catch(error => console.log(error));
  }

  public deleteFileDatabase(key: string) {
    return this.db.list(`${this.basePath}/`).remove(key);
  }

  public deleteFileStorage(name: string) {
    const storageRef = firebase.storage().ref();
    storageRef.child(`${this.basePath}/${name}`).delete();
  }
}
