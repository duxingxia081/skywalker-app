import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ToastController} from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private readonly serverUrl = 'http://localhost:9999/';
    private headers: HttpHeaders;

    constructor(private http: HttpClient,
                public toastCtrl: ToastController) {
    }

    accountLogin(userName: string, password: string, captcha_code: any): any {
        return this.http.post(this.serverUrl + 'auth', {userName, password, captcha_code});
    }

    getUserInfo(authorization): any {
        this.headers = new HttpHeaders().set('authorization', 'Bearer:' + authorization);
        return this.http.get(this.serverUrl + 'users/myinfo', {headers: this.headers});
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
