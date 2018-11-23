import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    serverUrl = 'http://localhost:9999/';

    constructor(private http: HttpClient) {
    }

    accountLogin(userName: string, password: string, captcha_code: any): any {
        return this.http.post(this.serverUrl + 'auth', {userName, password, captcha_code},);
    }
}
