import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ToastController} from '@ionic/angular';
import {LocalStorageService} from './local-storage.service';
import {of} from 'rxjs';
import {FileTransfer, FileTransferObject, FileUploadOptions} from '@ionic-native/file-transfer/ngx';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private readonly serverUrl = 'http://192.168.0.133:9999/';
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

    getQrCode(): any {
        const authorization = this.localStorageService.getStore('authorization');
        if (!authorization) {
            this.toastTip('请登陆后修改信息');
        }
        this.headers = new HttpHeaders().set('authorization', 'Bearer:' + authorization);
        return this.http.get(this.serverUrl + 'qrCode', {headers: this.headers});
    }

    getData(uri): any {
        const authorization = this.localStorageService.getStore('authorization');
        if (!authorization) {
            return of(null);
        }
        this.headers = new HttpHeaders().set('authorization', 'Bearer:' + authorization);
        return this.http.get(this.serverUrl + uri, {headers: this.headers});
    }

    postDataNotLogin(uri, data): any {
        return this.http.post(this.serverUrl + uri, data, {withCredentials: true});
    }

    /**
     * 上传图片
     * @param path 图片路径
     * @param upload 上传参数
     */
    uploadImg(path: string, upload: any) {
        if (!path) {
            return;
        }
        const authorization = this.localStorageService.getStore('authorization');
        if (!authorization) {
            return of(null);
        }
        const fileTransfer: FileTransferObject = new FileTransfer().create();
        const options: FileUploadOptions = {
            fileKey: 'file',
            headers: {
                'authorization': 'Bearer:' + authorization,
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8' // 不加入 发生错误！！
            },
            params: upload.params
        };
        fileTransfer.upload(path, upload.url, options)
            .then((data) => {
                this.toastTip(JSON.parse(data.response));
            }, (err) => {
                if (upload.error) {
                    this.toastTip('上传出错');
                }
            });

    }
}
