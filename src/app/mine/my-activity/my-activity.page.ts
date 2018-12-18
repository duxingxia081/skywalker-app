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

    listActivity: any;

    constructor(private dataService: DataService,
                private modalController: ModalController) {
    }

    ngOnInit() {
        this.getActivities();
    }


    async modifyMyActivity() {
        const modal = await this.modalController.create({
            component: ModifyMyActivityComponent
        });
        return await modal.present();
    }

    loadData(event) {
        setTimeout(() => {
            console.log('Done');
            event.target.complete();

            // App logic to determine if all data is loaded
            // and disable the infinite scroll
            /*if (data.length === 1000) {
                event.target.disabled = true;
            }*/
        }, 5000);
    }

    getActivities() {
        const params = {
            'time': 1449849600000
        };
        this.dataService.getDataWithParam('activity', params).subscribe(
            res => {
                if (null != res && res.code === '0' && res.data != null) {
                    this.listActivity = res.data;
                }
            }
        );
    }
}
