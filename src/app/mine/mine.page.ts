import {Component, OnInit} from '@angular/core';
import {ImgBaseUrl} from '../config/env';
import {LocalStorageService} from '../service/local-storage.service';
import {DataService} from '../service/data.service';
import {UserInfo} from '../class';

@Component({
    selector: 'app-mine',
    templateUrl: 'mine.page.html',
    styleUrls: ['mine.page.scss']
})
export class MinePage extends UserInfo implements OnInit {
    private imgBaseUrl: string = ImgBaseUrl;

    constructor(protected dataService: DataService,
                protected localStorageService: LocalStorageService) {
        super(dataService, localStorageService);
    }

    ngOnInit(): void {
    }
}
