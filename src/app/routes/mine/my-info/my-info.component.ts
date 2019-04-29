import {Component, OnInit} from '@angular/core';
import {UserInfo} from '../../../core/class';
import {DataService} from '../../../core/service/data.service';

@Component({
    selector: 'app-my-info',
    templateUrl: './my-info.component.html',
    styleUrls: ['./my-info.component.scss']
})
export class MyInfoComponent extends UserInfo implements OnInit {
    type = 'personInfo';

    constructor(protected dataService: DataService) {
        super(dataService);
    }

    ngOnInit(): void {
    }

    changeType(type: any) {
        this.type = type.target.value;
    }
}
