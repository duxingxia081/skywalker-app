import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ToastController} from '@ionic/angular';
import {of} from 'rxjs';
import {FileTransfer, FileTransferObject, FileUploadOptions} from '@ionic-native/file-transfer/ngx';
import {BaseUrl} from '../config/env';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private headers: HttpHeaders;
    private authorization: string;

    constructor(private http: HttpClient,
                private toastCtrl: ToastController) {
    }

    getCaptcha(): any {
        return this.http.get(BaseUrl + 'captcha', {withCredentials: true});
    }

    accountLogin(userName: string, password: string, captcha: string): any {
        return this.http.post(BaseUrl + 'auth', {userName, password, captcha});
    }

    getData(uri, params?): any {
        this.setHead();
        return this.http.get(BaseUrl + uri, {headers: this.headers, params: params});
    }

    postDataNotLogin(uri, data): any {
        return this.http.post(BaseUrl + uri, data);
    }

    postData(uri, data): any {
        this.setHead();
        return this.http.post(BaseUrl + uri, data, {headers: this.headers});
    }

    private setHead() {
        if (this.authorization) {
            return;
        }
        this.authorization = this.getStore('authorization');
        if (!this.authorization) {
            return of(null);
        }
        this.headers = new HttpHeaders().set('authorization', 'Bearer:' + this.authorization);
    }

    updateUserInfo(userInfo): any {
        const authorization = this.getStore('authorization');
        if (!authorization) {
            this.toastTip('请登陆后修改信息');
            return;
        }
        this.headers = new HttpHeaders().set('authorization', 'Bearer:' + authorization);
        return this.http.put(BaseUrl + 'users', userInfo, {headers: this.headers});
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
        const authorization = this.getStore('authorization');
        if (!authorization) {
            this.toastTip('请登陆后修改信息');
        }
        this.headers = new HttpHeaders().set('authorization', 'Bearer:' + authorization);
        return this.http.get(BaseUrl + 'qrCode', {headers: this.headers});
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
        const authorization = this.getStore('authorization');
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
                if (upload.success) {
                    upload.success(JSON.parse(data.response));
                }
            }, (err) => {
                if (upload.error) {
                    this.toastTip('上传出错');
                }
            });

    }

    getStore(name: string) {
        if (!name) {
            return;
        }
        return localStorage.getItem(name);
    }

    setStore(name: string, content: any) {
        if (!name) {
            return;
        }
        if (typeof content !== 'string') {
            content = JSON.stringify(content);
        }
        localStorage.setItem(name, content);
    }

    removeStore(name: string) {
        if (!name) {
            return;
        }
        localStorage.removeItem(name);
    }
}
