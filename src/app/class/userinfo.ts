import {DataService} from '../service/data.service';

export class UserInfo {
    public authorization: string;
    public userInfo: any;
    public imgBaseUrl = '/assets/imgs/defaultHead.png';

    constructor(protected dataService: DataService) {
        this.getAuthorization();
        this.getUserInfo();
    }

    getAuthorization() {
        this.authorization = this.dataService.getStore('authorization');
    }

    getUserInfo() {
        if (this.authorization) {
            this.userInfo = JSON.parse(this.dataService.getStore('userInfo'));
            this.imgBaseUrl = this.dataService.getStore('headImg');
        }
    }
}
