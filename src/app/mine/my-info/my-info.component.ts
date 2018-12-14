import {Component, OnInit} from '@angular/core';
import {UserInfo} from '../../class';
import {DataService} from '../../service/data.service';

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

    changeType(type: string) {
        this.type = type;
    }
}
