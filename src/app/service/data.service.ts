import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LocalStorageService} from './local-storage.service';
import {ToastController} from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    serverUrl = 'http://localhost:9998/';
    private readonly authorization: string;
    private readonly headers: HttpHeaders;

    constructor(private http: HttpClient,
                public localStorage: LocalStorageService,
                public toastCtrl: ToastController) {
        this.authorization = this.localStorage.getStore('authorization');
        this.headers = new HttpHeaders().set('authorization', 'Bearer:' + this.authorization);

    }

    accountLogin(userName: string, password: string, captcha_code: any): any {
        return this.http.post(this.serverUrl + 'auth', {userName, password, captcha_code});
    }

    getUserInfo(): any {
        if (this.authorization) {
            return this.http.get(this.serverUrl + 'users/myinfo', {headers: this.headers});
        }
    }

    getAuth(): any {
        return this.authorization;
    }

    async toastTip(message: string) {
        const toast = await this.toastCtrl.create({
            message: message,
            duration: 2000,
            position: 'middle'
        });
        toast.present();
    }
}
