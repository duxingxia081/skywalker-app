import {LocalStorageService} from '../service/local-storage.service';
import {DataService} from '../service/data.service';
import {Router} from '@angular/router';

export class UserInfo {
    public authorization: string;
    public userInfo: any;

    constructor(protected dataService: DataService,
                protected localStorageService: LocalStorageService,
                protected router: Router) {
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
        else {
            this.router.navigate(['/login']);
        }
    }
}
