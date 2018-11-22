import {Component, OnInit} from '@angular/core';
import {ImgBaseUrl} from '../../../config/env';

@Component({
    selector: 'app-person-info',
    templateUrl: './person-info.component.html',
    styleUrls: ['./person-info.component.scss']
})
export class PersonInfoComponent implements OnInit {

    imgBaseUrl: string = ImgBaseUrl;

    constructor() {
    }

    ngOnInit() {
    }

}
