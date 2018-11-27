import {LocalStorageService} from '../service/local-storage.service';

export class UserInfo {
    public authorization: string;

    constructor(public localStorageService: LocalStorageService) {
        this.authorization = this.localStorageService.getStore('authorization');
    }
}
