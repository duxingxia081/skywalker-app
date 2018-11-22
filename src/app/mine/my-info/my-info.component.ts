import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-my-info',
    templateUrl: './my-info.component.html',
    styleUrls: ['./my-info.component.scss']
})
export class MyInfoComponent implements OnInit {
    type = 'personInfo';

    constructor() {
    }

    ngOnInit() {
    }

    changeType(type: string) {
        this.type = type;
    }
}
