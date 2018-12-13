import {Component, OnInit} from '@angular/core';
import {UserInfo} from '../../class';
import {DataService} from '../../service/data.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-my-info',
    templateUrl: './my-info.component.html',
    styleUrls: ['./my-info.component.scss']
})
export class MyInfoComponent extends UserInfo implements OnInit {
    type = 'personInfo';

    constructor(protected dataService: DataService,
                protected router: Router) {
        super(dataService, router);
    }

    ngOnInit(): void {
    }

    changeType(type: string) {
        this.type = type;
    }
}
