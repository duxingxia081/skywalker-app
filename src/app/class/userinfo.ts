import {DataService} from '../service/data.service';
import {Router} from '@angular/router';

export class UserInfo {
    public authorization: string;
    public userInfo: any;
    public imgBaseUrl: string;

    constructor(protected dataService: DataService,
                protected router: Router) {
        this.getAuthorization();
        this.getUserInfo();
    }

    private getAuthorization() {
        this.authorization = this.dataService.getStore('authorization');
    }

    private getUserInfo() {
        if (this.authorization) {
            this.userInfo = JSON.parse(this.dataService.getStore('userInfo'));
            this.imgBaseUrl = this.dataService.getStore('headImg');
        }
    }
}
