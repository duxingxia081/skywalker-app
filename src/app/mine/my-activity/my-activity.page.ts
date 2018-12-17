import {Component, OnInit} from '@angular/core';
import {DataService} from '../../service/data.service';
import {ModalController} from '@ionic/angular';
import {ModifyMyActivityComponent} from './modify-my-activity/modify-my-activity.component';

@Component({
    selector: 'app-my-activity',
    templateUrl: './my-activity.page.html',
    styleUrls: ['./my-activity.page.scss'],
})
export class MyActivityPage implements OnInit {

    constructor(private dataService: DataService,
                private modalController: ModalController) {
    }

    ngOnInit() {
    }


    async modifyMyActivity() {
        const modal = await this.modalController.create({
            component: ModifyMyActivityComponent
        });
        return await modal.present();
    }
}
