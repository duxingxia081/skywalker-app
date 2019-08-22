import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ToastController} from 'ionic-angular';

// import { File, FileEntry } from '@ionic-native/file';
// import { ImageUtilProvider } from '../image-util/image-util';
// import lrz from "lrz";

@Injectable()
export class HttpProvider {

  constructor(
    public http: HttpClient,
    public toastCtrl:ToastController
  ) {
    console.log('Hello HttpProvider Provider');
  }


}
