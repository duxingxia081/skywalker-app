import {AppService} from '../service/app.service';
import {LocalStorageService} from '../service/local-storage.service';

export class UserInfo {
    public authorization: string;

    constructor(public appService: AppService,
                public localStorageService: LocalStorageService) {
        this.authorization = this.localStorageService.getStore('authorization');
        console.log(this.authorization);
    }
}
