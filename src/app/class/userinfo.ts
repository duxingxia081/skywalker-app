import {OnDestroy, OnInit} from '@angular/core';
import {AppService, LocalStorageService} from '../service';
import {Subscription} from 'rxjs';

export class UserInfo implements OnInit, OnDestroy {
    public authorization: string;
    unSubEvent: Subscription;

    constructor(public appService: AppService,
                public localStorageService: LocalStorageService) {
        this.unSubEvent = this.appService.userInfoEvent.subscribe(res => {
            this.authorization = this.localStorageService.getStore('authorization');
            this.ngOnInit();
        });
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        if (this.unSubEvent) {
            this.unSubEvent.unsubscribe();
        }
    }
}
