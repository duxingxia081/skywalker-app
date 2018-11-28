import {LocalStorageService} from '../service/local-storage.service';
import {DataService} from '../service/data.service';

export class UserInfo {
    public authorization: string;
    public userInfo: any;

    constructor(protected dataService: DataService,
                protected localStorageService: LocalStorageService) {
        this.getAuthorization();
        this.getUserInfo();
    }

    private getAuthorization() {
        this.authorization = this.localStorageService.getStore('authorization');
    }

    private getUserInfo() {
        if (this.authorization) {
            this.dataService.getUserInfo(this.authorization).subscribe(res => {
                this.userInfo = res.data;
            });
        }
    }
}
