import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../../../../service/data.service';
import {ModalController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
    selector: 'app-modify-user',
    templateUrl: './modify-user.component.html',
    styleUrls: ['./modify-user.component.scss']
})
export class ModifyUserComponent implements OnInit {

    @Input() key: string;
    @Input() title: string;
    @Input() userInfo: any;

    constructor(private dataService: DataService,
                private modalController: ModalController,
                private router: Router) {
    }

    ngOnInit() {
    }

    modify() {
        this.dataService.updateUserInfo(this.userInfo).subscribe(res => {
            if (res.code !== '0') {
                this.dataService.toastTip(res.message);
                return;
            }
            if (this.key === '6') {
                this.dataService.removeStore('authorization');
                this.modalController.dismiss();
                this.router.navigate(['/login']);
                return;
            }
            this.dataService.setStore('userInfo', this.userInfo);
            this.modalController.dismiss();
        });
    }
}
