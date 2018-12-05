import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ToastController} from '@ionic/angular';
import {LocalStorageService} from './local-storage.service';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private readonly serverUrl = 'http://localhost:9999/';
    private headers: HttpHeaders;

    constructor(private http: HttpClient,
                private toastCtrl: ToastController,
                private localStorageService: LocalStorageService) {
    }

    getCaptcha(): any {
        return this.http.get(this.serverUrl + 'captcha', {withCredentials: true});
    }

    accountLogin(userName: string, password: string, captcha: string): any {
        return this.http.post(this.serverUrl + 'auth', {userName, password, captcha}, {withCredentials: true});
    }

    getUserInfo(authorization): any {
        this.headers = new HttpHeaders().set('authorization', 'Bearer:' + authorization);
        return this.http.get(this.serverUrl + 'users/myinfo', {headers: this.headers});
    }

    updateUserInfo(userInfo): any {
        console.log(userInfo + userInfo.sex);
        const authorization = this.localStorageService.getStore('authorization');
        if (!authorization) {
            this.toastTip('请登陆后修改信息');
        }
        this.headers = new HttpHeaders().set('authorization', 'Bearer:' + authorization);
        return this.http.put(this.serverUrl + 'users', userInfo, {headers: this.headers});
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
