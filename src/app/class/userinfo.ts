import {LocalStorageService} from '../service/local-storage.service';
import {DataService} from '../service/data.service';
import {Router} from '@angular/router';

export class UserInfo {
    public authorization: string;
    public userInfo: any;

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
            this.userInfo = this.dataService.getStore('userInfo');
        }
        else {
            this.router.navigate(['/login']);
        }
    }
}
