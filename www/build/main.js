webpackJsonp([0],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__active_active__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__share_share__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__friend_friend__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__target_target__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__me_me__ = __webpack_require__(214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__friend_friend__["a" /* FriendPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__active_active__["a" /* ActivePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__share_share__["a" /* SharePage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__target_target__["a" /* TargetPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_5__me_me__["a" /* MePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"H:\www\skywalker-app\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="朋友" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="活动" tabIcon="information-circle"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="分享" tabIcon="contacts"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="目的地" tabIcon="contacts"></ion-tab>\n\n  <ion-tab [root]="tab5Root" tabTitle="我" tabIcon="contacts"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"H:\www\skywalker-app\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActiveDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__people_list_people_list__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_active_create_active__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__travel_line_detail_travel_line_detail__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__group_chat_group_chat__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pop_pop__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ActiveDetailPage = (function () {
    function ActiveDetailPage(navCtrl, navParams, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.isShowCommentDiv = false;
        this.comeInSelf = false;
        var comeInParams = this.navParams.get('comeInSelf');
        this.comeInSelf = comeInParams ? comeInParams : '';
        this.data = this.navParams.get('params');
    }
    ActiveDetailPage.prototype.goGroupChat = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__group_chat_group_chat__["a" /* GroupChatPage */]);
    };
    ActiveDetailPage.prototype.clickAddBtn = function () {
        this.isShowCommentDiv = !this.isShowCommentDiv;
    };
    ActiveDetailPage.prototype.getSettingOptions = function (event) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_6__pop_pop__["a" /* PopPage */], {
            buttons: [
                {
                    text: '编辑活动',
                    handle: function () {
                        alert('click edit btn');
                        popover.dismiss();
                    }
                },
                {
                    text: '取消活动',
                    handle: function () {
                        alert('click cancle btn');
                        popover.dismiss();
                    }
                },
                {
                    text: '退出活动',
                    handle: function () {
                        alert('click exit btn');
                        popover.dismiss();
                    }
                }
            ]
        }, {
            cssClass: 'mini',
        });
        popover.present({
            ev: event
        });
    };
    ActiveDetailPage.prototype.goTravelDetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__travel_line_detail_travel_line_detail__["a" /* TravelLineDetailPage */]);
    };
    ActiveDetailPage.prototype.goCreateTrval = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__create_active_create_active__["a" /* CreateActivePage */]);
    };
    ActiveDetailPage.prototype.goPeopleList = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__people_list_people_list__["a" /* PeopleListPage */]);
    };
    ActiveDetailPage.prototype.ionViewDidLoad = function () {
    };
    ActiveDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-active-detail',template:/*ion-inline-start:"H:\www\skywalker-app\src\pages\active-detail\active-detail.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>活动详情</ion-title>\n\n    <div class="topBackground2"></div>\n\n    <img src="/assets/imgs/slide0.jpg" alt="">\n\n    <ion-buttons right class="rightBtn" (click)="goCreateTrval()" *ngIf="!comeInSelf">\n\n      <button ion-button>\n\n        <ion-icon name="md-share-alt"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons right class="rightBtn" (click)="getSettingOptions($event);$event.stopPropagation();" *ngIf="comeInSelf">\n\n      <button ion-button>\n\n        <ion-icon name="ios-settings"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <span class="trvalType">自驾游</span>\n\n    <p class="goodNumber">\n\n      <span><ion-icon name="home"></ion-icon> 5200</span>\n\n      <span><ion-icon name="home"></ion-icon> 5200</span>\n\n    </p>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-item class="createMan">\n\n    <ion-avatar item-start>\n\n      <img src="assets/imgs/slide0.jpg" alt="">\n\n    </ion-avatar>\n\n    <h3>Finn</h3>\n\n    <h3>Don\'t Know What To Do!</h3>\n\n    <p>发布者: 吴彦祖</p>\n\n  </ion-item>\n\n  <div class="itemDiv">\n\n    <span>\n\n        <ion-icon name="pin"></ion-icon> 出发地\n\n    </span>\n\n    <span class="rightSpan">深圳</span>\n\n  </div>\n\n  <div class="itemDiv">\n\n    <span>\n\n        <ion-icon name="pin"></ion-icon> 目的地\n\n    </span>\n\n    <span class="rightSpan">冰雪长城, 玉龙血脉,</span>\n\n  </div>\n\n  <div class="itemDiv">\n\n    <span>\n\n        <ion-icon name="pin"></ion-icon> 出发日期\n\n    </span>\n\n    <span class="rightSpan">2018-10-01 出发, 约7天</span>\n\n  </div>\n\n  <div class="itemDiv">\n\n    <span>\n\n        <ion-icon name="pin"></ion-icon> 费用\n\n    </span>\n\n    <span class="rightSpan">AA</span>\n\n  </div>\n\n\n\n  <div class="headImages" (click)="goPeopleList()">\n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n        <img src="assets/imgs/slide0.jpg">\n\n      </ion-avatar>\n\n      <ion-avatar item-start>\n\n        <img src="assets/imgs/slide0.jpg">\n\n      </ion-avatar>\n\n      <ion-avatar item-start>\n\n        <img src="assets/imgs/slide0.jpg">\n\n      </ion-avatar>\n\n      <ion-avatar item-start>\n\n        <img src="assets/imgs/slide0.jpg">\n\n      </ion-avatar>\n\n      <ion-avatar item-start>\n\n        <img src="assets/imgs/slide0.jpg">\n\n      </ion-avatar>\n\n      <span class="perpleNumber">10+</span>\n\n    </ion-item>\n\n  </div>\n\n  <ion-item class="goDetileTitle" (click)="goTravelDetail()">\n\n    <p>\n\n      云南自驾游七日行程\n\n      <ion-icon name="ios-arrow-forward" right></ion-icon>\n\n    </p>\n\n    <div class="dashedLine"></div>\n\n    <div class="line">\n\n      <span>大理</span>\n\n      <span>玉龙血脉</span>\n\n      <span>沁园春</span>\n\n      <span>......</span>\n\n    </div>\n\n  </ion-item>\n\n  <div class="introduce">\n\n    景点介绍处景点介绍处景点介绍处景点介绍处景点介绍处景点介绍处景点介绍处景点介绍处景点介绍处景点介绍处景点介绍处景点介绍处景点介绍处景点介绍处景点介绍处景点介绍处景点介绍处景点介绍处景点介绍处景点介绍处景点介绍处景点介绍处景点介绍处\n\n    景点介绍处景点介绍处景点介绍处景点介绍处景点介绍处景点介绍处景点介绍处景点介绍处景点介绍处景点介绍处景点介绍处景点介绍处景点介绍处景点介绍处景点介绍处景点介绍处景点介绍处景点介绍处景点介绍处景点介绍处景点介绍处景点介绍处景点介绍处<br>\n\n  </div>\n\n  <ion-item class="liuYanText">\n\n    <p>\n\n      留言讨论\n\n      <ion-icon name="text" float-right></ion-icon>\n\n    </p>\n\n  </ion-item>\n\n  <ion-list class="commentList" [ngClass]="{\'noBottomClass\':isShowCommentDiv}">\n\n    <div class="commentInfo">\n\n      <ion-item>\n\n        <ion-avatar item-start>\n\n          <img src="assets/imgs/slide0.jpg" alt="">\n\n        </ion-avatar>\n\n        <h3>吴彦祖</h3>\n\n        <span item-end>2018-02-05</span>\n\n      </ion-item>\n\n      <p>\n\n        <span>这条评论表较长， 以为内我很想知道我去的地方是怎么样的， 有没有卢萨卡的解放路酒店管理</span>\n\n        <span><ion-icon name="text" float-right></ion-icon></span>\n\n      </p>\n\n    </div>\n\n    <div class="commentInfo">\n\n      <ion-item>\n\n        <ion-avatar item-start>\n\n          <img src="assets/imgs/slide0.jpg" alt="">\n\n        </ion-avatar>\n\n        <h3>吴彦祖</h3>\n\n        <span item-end>2018-02-05</span>\n\n      </ion-item>\n\n      <p>\n\n        <span>评论内容了</span>\n\n        <span><ion-icon name="text" float-right></ion-icon></span>\n\n      </p>\n\n    </div>\n\n    <div class="commentInfo lastCommentInfo">\n\n      <ion-item>\n\n        <ion-avatar item-start>\n\n          <img src="assets/imgs/slide0.jpg" alt="">\n\n        </ion-avatar>\n\n        <h3>吴彦祖</h3>\n\n        <span item-end>2018-02-05</span>\n\n      </ion-item>\n\n      <p>\n\n        <span>评论内容了</span>\n\n        <span><ion-icon name="text" float-right></ion-icon></span>\n\n      </p>\n\n    </div>\n\n  </ion-list>\n\n  <div class="btmDivOut" *ngIf="isShowCommentDiv">\n\n    <div class="btmDiv">\n\n      <textarea name="" placeholder="写评论"></textarea>\n\n      <ion-icon name="ios-people" (click)="goGroupChat()"></ion-icon>\n\n      <ion-icon name="ios-star-outline"></ion-icon>\n\n      <ion-icon name="ios-share-alt-outline"></ion-icon>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n<button ion-button full primary class="addBtn" *ngIf="!isShowCommentDiv" (click)="clickAddBtn()">立即参加</button>\n\n\n\n'/*ion-inline-end:"H:\www\skywalker-app\src\pages\active-detail\active-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* PopoverController */]])
    ], ActiveDetailPage);
    return ActiveDetailPage;
}());

//# sourceMappingURL=active-detail.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeopleListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__more_people_list_more_people_list__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PeopleListPage = (function () {
    function PeopleListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.noBorder = false;
        this.topChat = false;
        this.saveToList = true;
    }
    PeopleListPage.prototype.goMorePeople = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__more_people_list_more_people_list__["a" /* MorePeopleListPage */]);
    };
    PeopleListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PeopleListPage');
    };
    PeopleListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-people-list',template:/*ion-inline-start:"H:\www\skywalker-app\src\pages\people-list\people-list.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>聊天信息</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list class="topList">\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="assets/imgs/slide0.jpg" alt="">\n\n      </ion-avatar>\n\n      <p>吴彦祖</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="assets/imgs/slide0.jpg" alt="">\n\n      </ion-avatar>\n\n      <p>吴彦祖</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="assets/imgs/slide0.jpg" alt="">\n\n      </ion-avatar>\n\n      <p>吴彦祖</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="assets/imgs/slide0.jpg" alt="">\n\n      </ion-avatar>\n\n      <p>吴彦祖</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="assets/imgs/slide0.jpg" alt="">\n\n      </ion-avatar>\n\n      <p>吴彦祖</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="assets/imgs/slide0.jpg" alt="">\n\n      </ion-avatar>\n\n      <p>吴彦祖</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="assets/imgs/slide0.jpg" alt="">\n\n      </ion-avatar>\n\n      <p>吴彦祖</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="assets/imgs/slide0.jpg" alt="">\n\n      </ion-avatar>\n\n      <p>吴彦祖</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="assets/imgs/slide0.jpg" alt="">\n\n      </ion-avatar>\n\n      <p>吴彦祖</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="assets/imgs/slide0.jpg" alt="">\n\n      </ion-avatar>\n\n      <p>吴彦祖</p>\n\n    </ion-item>\n\n    \n\n    <ion-item class="addItem">\n\n      <ion-avatar>\n\n          +\n\n      </ion-avatar>\n\n      <p>　</p>\n\n    </ion-item>\n\n    <ion-item class="addItem">\n\n      <ion-avatar>\n\n          -\n\n      </ion-avatar>\n\n      <p>　</p>\n\n    </ion-item>\n\n  </ion-list>\n\n  <p class="showMorePeople" (click)="goMorePeople()">查看跟更多成员 <ion-icon name="ios-arrow-forward"></ion-icon></p>\n\n  <p class="divider"></p>\n\n\n\n  <ion-list class="bottomList">\n\n    <ion-item>\n\n      <ion-label fixed>我在本群昵称</ion-label>\n\n      <ion-input type="text" value=""></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label fixed>消息免打扰</ion-label>\n\n      <ion-toggle type="text" value="" [(ngModel)]="noBorder"></ion-toggle>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label fixed>置顶聊天</ion-label>\n\n      <ion-toggle type="text" value="" [(ngModel)]="topChat"></ion-toggle>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label fixed>保存到通讯录</ion-label>\n\n      <ion-toggle type="text" value="" [(ngModel)]="saveToList"></ion-toggle>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n<button ion-button full class="exitChat">退出群聊</button>\n\n'/*ion-inline-end:"H:\www\skywalker-app\src\pages\people-list\people-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], PeopleListPage);
    return PeopleListPage;
}());

//# sourceMappingURL=people-list.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_core_service_data_service__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, formBuilder, toastCtrl, dataService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.dataService = dataService;
        this.showPhoneBox = true;
        this.isShowOtherWay = true;
        this.loginStatus = true;
        this.changeText = '短信验证码登录';
        this.loginForm = this.formBuilder.group({
            phoneNumber: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            pwd: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            msgCode: ['']
        });
    }
    LoginPage.prototype.blurInput = function () {
        this.showPhoneBox = false;
    };
    LoginPage.prototype.focusInput = function () {
        this.showPhoneBox = true;
    };
    LoginPage.prototype.changeStatus = function () {
        this.loginStatus = !this.loginStatus;
        this.changeText = this.loginStatus ? '短信验证码登录' : '密码登录';
        this.loginForm.controls['pwd'].setValue('');
        this.loginForm.controls['msgCode'].setValue('');
        if (this.loginStatus) {
            this.loginForm.controls['msgCode'].clearValidators();
            this.loginForm.controls['msgCode'].updateValueAndValidity();
            this.loginForm.controls['pwd'].setValidators([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]);
            return;
        }
        this.loginForm.controls['pwd'].clearValidators();
        this.loginForm.controls['pwd'].updateValueAndValidity();
        this.loginForm.controls['msgCode'].setValidators([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]);
    };
    LoginPage.prototype.toastTips = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            cssClass: 'mini',
            position: 'middle',
            duration: 2000
        });
        toast.present();
    };
    LoginPage.prototype.checkMsCode = function () {
        var _this = this;
        var userName = this.loginForm.controls['phoneNumber'].value;
        var password = this.loginForm.controls['pwd'].value;
        var captcha = "";
        if (!userName) {
            var msg = '手机号码不能为空';
            this.toastTips(msg);
            return;
        }
        if (!this.isPhone()) {
            var msg = '手机号码格式不正确';
            this.toastTips(msg);
            return;
        }
        // if(!this.loginForm.controls['msgCode'].value) {
        //   let msg = '验证码不能为空';
        //   this.toastTips(msg);
        //   return;
        // }
        this.dataService.postData("auth", { userName: userName, password: password, captcha: captcha }).subscribe(function (res) {
            if (res.code !== '0') {
                // this.getCaptcha();
                _this.toastTips(res.message);
            }
            else {
                _this.dataService.setStore('authorization', res.data);
                _this.getHeadImg();
                _this.getUserInfo();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
            }
        });
    };
    LoginPage.prototype.sendMsgCode = function () {
        if (!this.loginForm.controls['phoneNumber'].value) {
            var msg = '手机号码不能为空';
            this.toastTips(msg);
            return;
        }
        if (!this.isPhone()) {
            var msg = '手机号码格式不正确';
            this.toastTips(msg);
            return;
        }
    };
    LoginPage.prototype.forbidden = function () {
        return false;
    };
    LoginPage.prototype.isPhone = function () {
        var flag = this.loginForm.controls['phoneNumber'].value
            && /(^1[3|4|5|6|7|8]\d{9}$)|(^09\d{8}$)/.test(this.loginForm.controls['phoneNumber'].value);
        return flag;
    };
    LoginPage.prototype.toRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.getHeadImg = function () {
        var _this = this;
        this.dataService.getData('users/headImg').subscribe(function (res) {
            if (null != res && res.code === '0' && res.data != null) {
                _this.dataService.setStore('headImg', 'data:image/jpg;base64,' + res.data);
            }
        });
    };
    LoginPage.prototype.getUserInfo = function () {
        var _this = this;
        this.dataService.getData('users/myinfo').subscribe(function (res) {
            if (null != res && res.code === '0' && res.data != null) {
                _this.dataService.setStore('userInfo', res.data);
            }
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"H:\www\skywalker-app\src\pages\login\login.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>登录</ion-title>\n\n    <ion-buttons class="rightBtn" (click)="toRegister()" right>\n\n      <button ion-button right>\n\n        注册\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <form [formGroup]="loginForm" (ngSubmit)="checkMsCode()">\n\n      <ion-item class="numberDiv1">\n\n        <div class="numberDiv">\n\n          <span class="left">手　机</span>\n\n          <!-- <span class="box" *ngIf="showPhoneBox"></span> -->\n\n          <input (cut)="forbidden()"\n\n          (copy)="forbidden()"\n\n          (paste)="forbidden()" formControlName="phoneNumber" placeholder="账号/手机号码" type="number" maxlength="11">\n\n          <button type="button" class="closeBtn" *ngIf="loginForm.controls[\'phoneNumber\'].value" (click)="loginForm.controls[\'phoneNumber\'].setValue(\'\')">\n\n            <ion-icon name="ios-close"></ion-icon>\n\n          </button>\n\n        </div>\n\n      </ion-item>\n\n\n\n      <ion-item class="numberDiv1 numberPwd" *ngIf="loginStatus">\n\n        <div class="numberDiv">\n\n          <span class="left">密　码</span>\n\n          <!-- <span class="box" *ngIf="showPhoneBox"></span> -->\n\n          <input (cut)="forbidden()"\n\n          (copy)="forbidden()"\n\n          (paste)="forbidden()" formControlName="pwd" placeholder="请输入密码" [type]="showPwd? \'text\':\'password\'" maxlength=11>\n\n          <button type="button" class="closeBtn" *ngIf="loginForm.controls[\'pwd\'].value" (click)="showPwd = !showPwd">\n\n            <ion-icon [name]="showPwd?\'md-eye-off\':\'md-eye\'"></ion-icon>\n\n          </button>\n\n        </div>\n\n      </ion-item> \n\n\n\n      <ion-item class="secondItem numberPwd" *ngIf="!loginStatus">\n\n        <div class="numberDiv">\n\n          <span class="left">验证码</span>\n\n          <!-- <span class="box"></span> -->\n\n          <input formControlName="msgCode" placeholder="验证码" type="number" maxlength=11>\n\n          <button type="button" class="sedmsg" (click)="sendMsgCode()">\n\n            发送验证码\n\n          </button>\n\n        </div>\n\n      </ion-item>\n\n      <p class="changeTextP" (click)="changeStatus()">{{ changeText }}</p>\n\n      <button class="loginBtn" ion-button full>登 录</button>\n\n  </form>\n\n\n\n  <div *ngIf="isShowOtherWay">\n\n    <div class="otherLoginWay">\n\n      <p></p>\n\n      <span>第三方登录</span>\n\n    </div>\n\n\n\n    <div class="loginImg">\n\n      <img src="assets/imgs/wechat.png" alt="">\n\n      <img src="assets/imgs/QQ.png" alt="">\n\n    </div>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"H:\www\skywalker-app\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__app_core_service_data_service__["a" /* DataService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 118:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 160;

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_active_create_active__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__active_detail_active_detail__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_core_service_data_service__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ActivePage = (function () {
    function ActivePage(navCtrl, dataProvider) {
        this.navCtrl = navCtrl;
        this.dataProvider = dataProvider;
        this.activeId = 1000000;
        this.type = 0;
        this.objSelf = {};
        this.BASE_URL = __WEBPACK_IMPORTED_MODULE_4__config__["a" /* BASE_URL */];
    }
    ActivePage.prototype.ngOnInit = function () {
        this.getActivities();
    };
    ActivePage.prototype.ngOnChanges = function () {
        this.activeId = 1000000;
        this.getActivities();
    };
    ActivePage.prototype.loadData = function (event) {
        this.getActivities(event);
    };
    // 请求活动数据
    ActivePage.prototype.getActivities = function (event) {
        var _this = this;
        var params = {
            'activeId': this.activeId,
            'activityType': this.type
        };
        this.dataProvider.getData('activity', params).subscribe(function (res) {
            console.log(res);
            if (null != res && res.code === '0' && res.data != null) {
                if (event) {
                    var newData = res.data.list;
                    _this.listActivity = _this.listActivity.concat(newData);
                    event.target.complete();
                    if (res.data.list.length <= 5) {
                        event.target.disabled = true;
                    }
                }
                else {
                    _this.listActivity = res.data.list;
                }
                _this.getLastActiveId();
            }
        });
    };
    ActivePage.prototype.getLastActiveId = function () {
        if (null != this.listActivity && this.listActivity.length !== 0) {
            var lastActivity = this.listActivity[this.listActivity.length - 1];
            this.activeId = lastActivity.activeId;
        }
    };
    ActivePage.prototype.goCreateTrval = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__create_active_create_active__["a" /* CreateActivePage */]);
    };
    ActivePage.prototype.goDetailPage = function (obj) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__active_detail_active_detail__["a" /* ActiveDetailPage */], { params: obj });
    };
    ActivePage.prototype.doInfinite1 = function (infiniteScroll) {
        setTimeout(function () {
            infiniteScroll.complete();
        }, 300);
    };
    ActivePage.prototype.ionViewDidEnter = function () {
        this.slides.startAutoplay();
        this.slides.autoplayDisableOnInteraction = false;
    };
    //页面离开时停止自动播放
    ActivePage.prototype.ionViewDidLeave = function () {
        this.slides.stopAutoplay();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */])
    ], ActivePage.prototype, "slides", void 0);
    ActivePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-active',template:/*ion-inline-start:"H:\www\skywalker-app\src\pages\active\active.html"*/'<ion-header>\n\n  <ion-navbar class="firstPage">\n\n    <div class="topBackground2"></div>\n\n    <div class="topIcon">\n\n      <ion-buttons left class="firstBtn">\n\n        <button ion-button>\n\n          <ion-icon name="pin"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n      <ion-buttons right>\n\n        <button ion-button>\n\n          <ion-icon name="search" style="padding: 0;"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n      <ion-buttons right (click)="goCreateTrval()">\n\n        <button ion-button>\n\n          <ion-icon name="add" style="padding-left: 0;"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </div>\n\n    <ion-slides pager autoplay="3000" loop="true" autoplayDisableOnInteraction = "true">\n\n      <ion-slide><img src="/assets/imgs/slide0.jpg" alt=""></ion-slide>\n\n      <ion-slide><img src="/assets/imgs/slide1.jpg" alt=""></ion-slide>\n\n      <ion-slide><img src="/assets/imgs/slide2.jpg" alt=""></ion-slide>\n\n    </ion-slides>\n\n  </ion-navbar>\n\n    <ion-segment [(ngModel)]="type">\n\n      <ion-segment-button value="0">\n\n        最新推荐\n\n      </ion-segment-button>\n\n      <ion-segment-button value="2">\n\n        自驾游\n\n      </ion-segment-button>\n\n      <ion-segment-button value="3">\n\n        亲子游\n\n      </ion-segment-button>\n\n      <ion-segment-button value="4">\n\n        户外约伴\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div [ngSwitch]="type">\n\n    <ion-list *ngSwitchCase="0">\n\n      <ion-item *ngFor="let obj of listActivity" (click)="goDetailPage(obj)">\n\n        <div class="listDiv">\n\n          <div class="imgDiv">\n\n            <img  *ngIf="obj.listActiveImgDTO?.length>0" src="{{BASE_URL+obj.listActiveImgDTO[0].imageUrl}}" alt="">\n\n            <img  *ngIf="obj.listActiveImgDTO?.length==0" src="assets/imgs/slide0.jpg" alt="">\n\n          </div>\n\n          <div>\n\n            <p class="title">{{ obj.activeTitle }}</p>\n\n            <p class="goodNumber">\n\n              <span><ion-icon name="home"></ion-icon> {{ obj.charge }}</span>\n\n              <span><ion-icon name="home"></ion-icon> {{ obj.charge }}</span>\n\n            </p>\n\n            <ion-avatar item-start class="sendImg">\n\n              <img  *ngIf="null!=obj.headImage" src="{{\'data:image/jpg;base64,\'+obj.headImage}}" alt="">\n\n              <img  *ngIf="null==obj.headImage" src="assets/imgs/slide0.jpg" alt="">\n\n            </ion-avatar>\n\n            <p class="whoSend">\n\n              <span class="sss">本活动由<font color="red">{{ obj.nickname }}</font>发起</span>\n\n              <span class="trvalType">{{ obj.typeName }}</span>\n\n            </p>\n\n            <div class="flexDiv">\n\n              <div>\n\n                <p>\n\n                  <ion-icon name="pin"></ion-icon>\n\n                  <span> {{ obj.startAddressName }}-->{{ obj.endAddressName }}</span>\n\n                </p>\n\n                <p>\n\n                  <ion-icon name="md-calendar"></ion-icon>\n\n                  <span> {{ obj.goTime }} 出发, 约{{ obj.days }}天行程</span>\n\n                </p>\n\n              </div>\n\n              <div class="freeDiv">\n\n                <p class="p1">{{ obj.charge }}</p>\n\n                <p class="p2">费用</p>\n\n              </div>\n\n            </div>\n\n          </div>\n\n          <p class="splitLine"></p>\n\n          <div class="picListDiv">\n\n            <ion-item>\n\n              <ion-avatar item-start>\n\n                <img src="assets/imgs/slide0.jpg">\n\n              </ion-avatar>\n\n              <ion-avatar item-start>\n\n                <img src="assets/imgs/slide0.jpg">\n\n              </ion-avatar>\n\n              <ion-avatar item-start>\n\n                <img src="assets/imgs/slide0.jpg">\n\n              </ion-avatar>\n\n              <ion-avatar item-start>\n\n                <img src="assets/imgs/slide0.jpg">\n\n              </ion-avatar>\n\n              <ion-avatar item-start>\n\n                <img src="assets/imgs/slide0.jpg">\n\n              </ion-avatar>\n\n              <span class="perpleNumber">10+</span>\n\n            </ion-item>\n\n\n\n          </div>\n\n          \n\n        </div>\n\n      </ion-item>\n\n      <ion-infinite-scroll (ionInfinite)="loadData($event)">\n\n        <ion-infinite-scroll-content loadingSpinner="bubbles"\n\n        loadingText="加载中..."></ion-infinite-scroll-content>\n\n      </ion-infinite-scroll>\n\n    </ion-list>\n\n\n\n    <ion-list *ngSwitchCase="2">\n\n      <ion-item *ngFor="let obj of listActivity" (click)="goDetailPage(obj)">\n\n        <div class="selfListDiv">\n\n          <ion-avatar>\n\n            <img src="assets/imgs/slide0.jpg" alt="">\n\n          </ion-avatar>\n\n          <div class="twoFlex">\n\n            <div class="imgDiv">\n\n              <img src="assets/imgs/slide0.jpg" alt="">\n\n            </div>\n\n            <div class="rightDiv">\n\n              <p class="title">{{ obj.title }}</p>\n\n              <p>\n\n                <ion-icon name="pin"></ion-icon>\n\n                <span> {{ obj.pos }}</span>\n\n              </p>\n\n              <p>\n\n                <ion-icon name="md-calendar"></ion-icon>\n\n                <span> {{ obj.startDate }} 出发, 约5天</span>\n\n              </p>\n\n              <p class="splitLine"></p>\n\n              <p class="noTopP">\n\n                <span class="num">{{ obj.perpleNum }}</span>\n\n                <span class="goodNum"><ion-icon name="home"></ion-icon> {{ obj.goodNum }}</span>\n\n                <span class="goodNum goodNum1"><ion-icon name="home"></ion-icon> {{ obj.commentNum }}</span>\n\n              </p>\n\n            </div>\n\n          </div>\n\n        </div>\n\n      </ion-item>\n\n      <ion-infinite-scroll (ionInfinite)="loadData($event)">\n\n        <ion-infinite-scroll-content loadingSpinner="bubbles"\n\n        loadingText="加载中..."></ion-infinite-scroll-content>\n\n      </ion-infinite-scroll>\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase="3">\n\n      亲子游\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase="4">\n\n      户外约伴\n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"H:\www\skywalker-app\src\pages\active\active.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__app_core_service_data_service__["a" /* DataService */]])
    ], ActivePage);
    return ActivePage;
}());

//# sourceMappingURL=active.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateLinePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CreateLinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateLinePage = (function () {
    function CreateLinePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CreateLinePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateLinePage');
    };
    CreateLinePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-line',template:/*ion-inline-start:"H:\www\skywalker-app\src\pages\create-line\create-line.html"*/'<!--\n\n  Generated template for the CreateLinePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>创建行程</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n  <div class="outDiv">\n\n    <div class="leftDashed"></div>\n\n    <div class="flexDiv firstFlexDiv">\n\n      <div class="leftCircle">D1</div>\n\n      <div class="rightContent">\n\n        <input type="text" placeholder="请输入目的地或景点名称,多个用逗号隔开">\n\n        <textarea name="" id=""></textarea>\n\n        <button ion-button full>+</button>\n\n      </div>\n\n    </div>\n\n    <div class="flexDiv">\n\n      <div class="closeBtn"><ion-icon name="ios-close"></ion-icon></div>\n\n      <div class="leftCircle">D2</div>\n\n      <div class="rightContent">\n\n        <input type="text" placeholder="请输入目的地或景点名称,多个用逗号隔开">\n\n        <textarea name="" id=""></textarea>\n\n        <button ion-button full>+</button>\n\n      </div>\n\n    </div>\n\n    <div class="flexDiv">\n\n      <div class="addLineDiv">+</div>\n\n    </div>\n\n  </div>\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"H:\www\skywalker-app\src\pages\create-line\create-line.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CreateLinePage);
    return CreateLinePage;
}());

//# sourceMappingURL=create-line.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MorePeopleListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MorePeopleListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MorePeopleListPage = (function () {
    function MorePeopleListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MorePeopleListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MorePeopleListPage');
    };
    MorePeopleListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-more-people-list',template:/*ion-inline-start:"H:\www\skywalker-app\src\pages\more-people-list\more-people-list.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>人员列表</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list class="topList">\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="assets/imgs/slide0.jpg" alt="">\n\n      </ion-avatar>\n\n      <p>吴彦祖</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="assets/imgs/slide0.jpg" alt="">\n\n      </ion-avatar>\n\n      <p>吴彦祖</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="assets/imgs/slide0.jpg" alt="">\n\n      </ion-avatar>\n\n      <p>吴彦祖</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="assets/imgs/slide0.jpg" alt="">\n\n      </ion-avatar>\n\n      <p>吴彦祖</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="assets/imgs/slide0.jpg" alt="">\n\n      </ion-avatar>\n\n      <p>吴彦祖</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="assets/imgs/slide0.jpg" alt="">\n\n      </ion-avatar>\n\n      <p>吴彦祖</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="assets/imgs/slide0.jpg" alt="">\n\n      </ion-avatar>\n\n      <p>吴彦祖</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="assets/imgs/slide0.jpg" alt="">\n\n      </ion-avatar>\n\n      <p>吴彦祖</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="assets/imgs/slide0.jpg" alt="">\n\n      </ion-avatar>\n\n      <p>吴彦祖</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="assets/imgs/slide0.jpg" alt="">\n\n      </ion-avatar>\n\n      <p>吴彦祖</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="assets/imgs/slide0.jpg" alt="">\n\n      </ion-avatar>\n\n      <p>吴彦祖</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="assets/imgs/slide0.jpg" alt="">\n\n      </ion-avatar>\n\n      <p>吴彦祖</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="assets/imgs/slide0.jpg" alt="">\n\n      </ion-avatar>\n\n      <p>吴彦祖</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="assets/imgs/slide0.jpg" alt="">\n\n      </ion-avatar>\n\n      <p>吴彦祖</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="assets/imgs/slide0.jpg" alt="">\n\n      </ion-avatar>\n\n      <p>吴彦祖</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="assets/imgs/slide0.jpg" alt="">\n\n      </ion-avatar>\n\n      <p>吴彦祖</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="assets/imgs/slide0.jpg" alt="">\n\n      </ion-avatar>\n\n      <p>吴彦祖</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="assets/imgs/slide0.jpg" alt="">\n\n      </ion-avatar>\n\n      <p>吴彦祖</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="assets/imgs/slide0.jpg" alt="">\n\n      </ion-avatar>\n\n      <p>吴彦祖</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="assets/imgs/slide0.jpg" alt="">\n\n      </ion-avatar>\n\n      <p>吴彦祖</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="assets/imgs/slide0.jpg" alt="">\n\n      </ion-avatar>\n\n      <p>吴彦祖</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="assets/imgs/slide0.jpg" alt="">\n\n      </ion-avatar>\n\n      <p>吴彦祖</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="assets/imgs/slide0.jpg" alt="">\n\n      </ion-avatar>\n\n      <p>吴彦祖</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="assets/imgs/slide0.jpg" alt="">\n\n      </ion-avatar>\n\n      <p>吴彦祖</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="assets/imgs/slide0.jpg" alt="">\n\n      </ion-avatar>\n\n      <p>吴彦祖</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="assets/imgs/slide0.jpg" alt="">\n\n      </ion-avatar>\n\n      <p>吴彦祖</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="assets/imgs/slide0.jpg" alt="">\n\n      </ion-avatar>\n\n      <p>吴彦祖</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="assets/imgs/slide0.jpg" alt="">\n\n      </ion-avatar>\n\n      <p>吴彦祖</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="assets/imgs/slide0.jpg" alt="">\n\n      </ion-avatar>\n\n      <p>吴彦祖</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="assets/imgs/slide0.jpg" alt="">\n\n      </ion-avatar>\n\n      <p>吴彦祖</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="assets/imgs/slide0.jpg" alt="">\n\n      </ion-avatar>\n\n      <p>吴彦祖</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="assets/imgs/slide0.jpg" alt="">\n\n      </ion-avatar>\n\n      <p>吴彦祖</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="assets/imgs/slide0.jpg" alt="">\n\n      </ion-avatar>\n\n      <p>吴彦祖</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="assets/imgs/slide0.jpg" alt="">\n\n      </ion-avatar>\n\n      <p>吴彦祖</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="assets/imgs/slide0.jpg" alt="">\n\n      </ion-avatar>\n\n      <p>吴彦祖</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="assets/imgs/slide0.jpg" alt="">\n\n      </ion-avatar>\n\n      <p>吴彦祖</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="assets/imgs/slide0.jpg" alt="">\n\n      </ion-avatar>\n\n      <p>吴彦祖</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="assets/imgs/slide0.jpg" alt="">\n\n      </ion-avatar>\n\n      <p>吴彦祖</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="assets/imgs/slide0.jpg" alt="">\n\n      </ion-avatar>\n\n      <p>吴彦祖</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="assets/imgs/slide0.jpg" alt="">\n\n      </ion-avatar>\n\n      <p>吴彦祖</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="assets/imgs/slide0.jpg" alt="">\n\n      </ion-avatar>\n\n      <p>吴彦祖</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="assets/imgs/slide0.jpg" alt="">\n\n      </ion-avatar>\n\n      <p>吴彦祖</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="assets/imgs/slide0.jpg" alt="">\n\n      </ion-avatar>\n\n      <p>吴彦祖</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="assets/imgs/slide0.jpg" alt="">\n\n      </ion-avatar>\n\n      <p>吴彦祖</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="assets/imgs/slide0.jpg" alt="">\n\n      </ion-avatar>\n\n      <p>吴彦祖</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="assets/imgs/slide0.jpg" alt="">\n\n      </ion-avatar>\n\n      <p>吴彦祖</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="assets/imgs/slide0.jpg" alt="">\n\n      </ion-avatar>\n\n      <p>吴彦祖</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="assets/imgs/slide0.jpg" alt="">\n\n      </ion-avatar>\n\n      <p>吴彦祖</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="assets/imgs/slide0.jpg" alt="">\n\n      </ion-avatar>\n\n      <p>吴彦祖</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="assets/imgs/slide0.jpg" alt="">\n\n      </ion-avatar>\n\n      <p>吴彦祖</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-avatar>\n\n        <img src="assets/imgs/slide0.jpg" alt="">\n\n      </ion-avatar>\n\n      <p>吴彦祖</p>\n\n    </ion-item>\n\n    \n\n    <ion-item class="addItem">\n\n      <ion-avatar>\n\n          +\n\n      </ion-avatar>\n\n      <p>　</p>\n\n    </ion-item>\n\n    <ion-item class="addItem">\n\n      <ion-avatar>\n\n          -\n\n      </ion-avatar>\n\n      <p>　</p>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"H:\www\skywalker-app\src\pages\more-people-list\more-people-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], MorePeopleListPage);
    return MorePeopleListPage;
}());

//# sourceMappingURL=more-people-list.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TravelLineDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TravelLineDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TravelLineDetailPage = (function () {
    function TravelLineDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TravelLineDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TravelLineDetailPage');
    };
    TravelLineDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-travel-line-detail',template:/*ion-inline-start:"H:\www\skywalker-app\src\pages\travel-line-detail\travel-line-detail.html"*/'<!--\n\n  Generated template for the TravelLineDetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>自驾游7天行程</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list class="topItem">\n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n        <img src="assets/imgs/slide0.jpg" alt="">\n\n      </ion-avatar>\n\n      <h2>云南自驾游七日行程</h2>\n\n      <p>\n\n        <span>本路线由<font color="red"> 吴彦祖 </font>提供</span>\n\n        <span float-right>2019-10-01</span>\n\n      </p>\n\n    </ion-item>\n\n  </ion-list>\n\n  <div class="outDiv">\n\n    <div class="leftDashed"></div>\n\n    <div class="flexDiv firstFlexDiv">\n\n      <div class="leftCircle">D1</div>\n\n      <div class="rightContent">\n\n        <h2>丽江</h2>\n\n        <div class="posi">玉龙血脉、冰雪长城、沁园春、天堂之城、香波岛、爱琴海</div>\n\n        <div class="detailSaying">玉龙血脉、冰雪长城、沁园春、天堂之城、香波岛、爱琴海、天空之城、巨人谷、精灵世界、琳琅天上</div>\n\n      </div>\n\n    </div>\n\n    <div class="flexDiv">\n\n      <!-- <div class="closeBtn"><ion-icon name="ios-close"></ion-icon></div> -->\n\n      <div class="leftCircle">D2</div>\n\n      <div class="rightContent">\n\n        <h2>丽江</h2>\n\n        <div class="posi">玉龙血脉、冰雪长城、沁园春、天堂之城、香波岛、爱琴海</div>\n\n        <div class="detailSaying">玉龙血脉、冰雪长城、沁园春、天堂之城、香波岛、爱琴海、天空之城、巨人谷、精灵世界、琳琅天上</div>\n\n        <div class="imgDiv">\n\n          <img src="assets/imgs/slide0.jpg" alt="">\n\n          <img src="assets/imgs/slide0.jpg" alt="">\n\n          <img src="assets/imgs/slide0.jpg" alt="">\n\n          <img src="assets/imgs/slide0.jpg" alt="">\n\n          <img src="assets/imgs/slide0.jpg" alt="">\n\n        </div>\n\n      </div>\n\n    </div>\n\n    <div class="flexDiv">\n\n      <!-- <div class="closeBtn"><ion-icon name="ios-close"></ion-icon></div> -->\n\n      <div class="leftCircle">D3</div>\n\n      <div class="rightContent">\n\n        <h2>丽江</h2>\n\n        <div class="posi">玉龙血脉、冰雪长城、沁园春、天堂之城、香波岛、爱琴海</div>\n\n        <div class="detailSaying">玉龙血脉、冰雪长城、沁园春、天堂之城、香波岛、爱琴海、天空之城、巨人谷、精灵世界、琳琅天上</div>\n\n        <div class="imgDiv">\n\n          <img src="assets/imgs/slide0.jpg" alt="">\n\n          <img src="assets/imgs/slide0.jpg" alt="">\n\n          <img src="assets/imgs/slide0.jpg" alt="">\n\n          <img src="assets/imgs/slide0.jpg" alt="">\n\n          <img src="assets/imgs/slide0.jpg" alt="">\n\n        </div>\n\n      </div>\n\n    </div>\n\n    <div class="flexDiv">\n\n      <div class="addLineDiv">结束</div>\n\n    </div>\n\n  </div>\n\n  <div class="commentLine">\n\n    <span>对此路线评级</span>\n\n    <p>\n\n      <ion-icon name="ios-star-outline"></ion-icon>\n\n      <ion-icon name="ios-star-outline"></ion-icon>\n\n      <ion-icon name="ios-star-outline"></ion-icon>\n\n      <ion-icon name="ios-star-outline"></ion-icon>\n\n      <ion-icon name="ios-star-outline"></ion-icon>\n\n    </p>\n\n  </div>\n\n\n\n\n\n  <ion-item class="liuYanText">\n\n    <p>\n\n      留言讨论\n\n      <ion-icon name="text" float-right></ion-icon>\n\n    </p>\n\n  </ion-item>\n\n  <ion-list class="commentList">\n\n    <div class="commentInfo">\n\n      <ion-item>\n\n        <ion-avatar item-start>\n\n          <img src="assets/imgs/slide0.jpg" alt="">\n\n        </ion-avatar>\n\n        <h3>吴彦祖</h3>\n\n        <span item-end>2018-02-05</span>\n\n      </ion-item>\n\n      <p>\n\n        <span>这条评论表较长， 以为内我很想知道我去的地方是怎么样的， 有没有卢萨卡的解放路酒店管理</span>\n\n        <span><ion-icon name="text" float-right></ion-icon></span>\n\n      </p>\n\n    </div>\n\n    <div class="commentInfo">\n\n      <ion-item>\n\n        <ion-avatar item-start>\n\n          <img src="assets/imgs/slide0.jpg" alt="">\n\n        </ion-avatar>\n\n        <h3>吴彦祖</h3>\n\n        <span item-end>2018-02-05</span>\n\n      </ion-item>\n\n      <p>\n\n        <span>评论内容了</span>\n\n        <span><ion-icon name="text" float-right></ion-icon></span>\n\n      </p>\n\n    </div>\n\n    <div class="commentInfo">\n\n      <ion-item>\n\n        <ion-avatar item-start>\n\n          <img src="assets/imgs/slide0.jpg" alt="">\n\n        </ion-avatar>\n\n        <h3>吴彦祖</h3>\n\n        <span item-end>2018-02-05</span>\n\n      </ion-item>\n\n      <p>\n\n        <span>评论内容了</span>\n\n        <span><ion-icon name="text" float-right></ion-icon></span>\n\n      </p>\n\n    </div>\n\n  </ion-list>\n\n  <div class="input">\n\n    <textarea name="" placeholder="评论此次出行路线"></textarea>\n\n    <ion-icon name="ios-happy-outline"></ion-icon>\n\n  </div>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"H:\www\skywalker-app\src\pages\travel-line-detail\travel-line-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], TravelLineDetailPage);
    return TravelLineDetailPage;
}());

//# sourceMappingURL=travel-line-detail.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__people_list_people_list__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the GroupChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GroupChatPage = (function () {
    function GroupChatPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fakeData();
    }
    GroupChatPage.prototype.fakeData = function () {
        var data = [
            {
                content: '在吗?',
                sendTime: '2018-10-10 18:20',
                imgPath: '',
                selfSend: false,
            },
            {
                content: '今天去哪里玩',
                sendTime: '2018-10-10 18:20',
                imgPath: '',
                selfSend: false,
            },
            {
                content: '今天好无聊啊，出来吹吹水啊，无聊到都不知道干嘛了，你还不出来跟我聊天啊， 阿里阿第三方加拉斯京东客服',
                sendTime: '2018-10-10 18:20',
                imgPath: '',
                selfSend: false,
            },
            {
                content: '不想跟你去玩',
                sendTime: '2018-10-10 18:20',
                imgPath: '',
                selfSend: true,
            },
            {
                content: '斯科拉多就福利卡三等奖弗朗克阿萨德发的是发多少从v阿萨德才按时发但是',
                sendTime: '2018-10-10 18:20',
                imgPath: '',
                selfSend: true,
            },
        ];
        this.chatData = data;
    };
    GroupChatPage.prototype.goChatInfo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__people_list_people_list__["a" /* PeopleListPage */]);
    };
    GroupChatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GroupChatPage');
    };
    GroupChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-group-chat',template:/*ion-inline-start:"H:\www\skywalker-app\src\pages\group-chat\group-chat.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>群聊</ion-title>\n\n    <ion-buttons right class="rightBtn" (click)="goChatInfo()">\n\n      <button ion-button>\n\n        <ion-icon name="ios-more"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item *ngFor="let obj of chatData">\n\n      <ion-avatar [ngClass]="{\'floatLeft\': !obj.selfSend, \'floatRight\': obj.selfSend}">\n\n        <img src="assets/imgs/slide0.jpg" alt="">\n\n      </ion-avatar>\n\n      <div [ngClass]="{\'leftSan\': !obj.selfSend, \'rightSan\':obj.selfSend}"></div>\n\n      <p [ngClass]="{\'leftP\': !obj.selfSend, \'rightP\':obj.selfSend}">\n\n        <span>{{ obj.content }}</span>\n\n      </p>\n\n    </ion-item>\n\n    <!-- <ion-item>\n\n      <ion-avatar [ngClass]="{\'floatLeft\': !selfSend, \'floatRight\': selfSend}">\n\n        <img src="assets/imgs/slide0.jpg" alt="">\n\n      </ion-avatar>\n\n      <div class="rightSan"></div>\n\n      <p class="rightP">\n\n        <span>我的信息啊</span>\n\n      </p>\n\n    </ion-item> -->\n\n  </ion-list>\n\n</ion-content>\n\n<ion-footer>\n\n  <div class="footerDivOut">\n\n    <div class="footerDiv">\n\n      <ion-icon name="ios-mic"></ion-icon>\n\n      <textarea name="" placeholder="请输入"></textarea>\n\n      <ion-icon name="md-happy"></ion-icon>\n\n      <ion-icon name="md-add-circle"></ion-icon>\n\n    </div>\n\n  </div>\n\n</ion-footer>\n\n'/*ion-inline-end:"H:\www\skywalker-app\src\pages\group-chat\group-chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], GroupChatPage);
    return GroupChatPage;
}());

//# sourceMappingURL=group-chat.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PopPage = (function () {
    function PopPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.buttons = [
            {
                text: '',
                handle: function () {
                }
            }
        ];
        this.buttons = this.navParams.get('buttons');
    }
    PopPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PopPage');
    };
    PopPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pop',template:/*ion-inline-start:"H:\www\skywalker-app\src\pages\pop\pop.html"*/'<div text-center *ngFor="let obj of buttons" (click)="obj.handle()">\n\n  {{ obj.text }}\n\n</div>'/*ion-inline-end:"H:\www\skywalker-app\src\pages\pop\pop.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], PopPage);
    return PopPage;
}());

//# sourceMappingURL=pop.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BASE_URL; });
/* unused harmony export VERSION */
// const BASE_URL = 'http://xxx.xxx.x.xxx:xxxx/test';
var BASE_URL = 'http://marry.wicp.net/';
var VERSION = 'xxxxxxxx版本';

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SharePage = (function () {
    function SharePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.initData();
    }
    SharePage.prototype.initData = function () {
        var notes = [
            {
                title: '高山大海一路前行，一次别致的户外徒步',
                tag: '攻略',
                author: '伊周',
                pos: '丽江 大理 鲤鱼湖',
                publishTime: '2019-10-01',
                collectionNum: '3215',
                messageNum: '67'
            },
            {
                title: '高山大海一路前行，一次别致的户外徒步',
                tag: '攻略',
                author: '伊周',
                pos: '丽江 大理 鲤鱼湖',
                publishTime: '2019-10-01',
                collectionNum: '3215',
                messageNum: '67'
            },
            {
                title: '高山大海一路前行，一次别致的户外徒步',
                tag: '攻略',
                author: '伊周',
                pos: '丽江 大理 鲤鱼湖',
                publishTime: '2019-10-01',
                collectionNum: '3215',
                messageNum: '67'
            },
            {
                title: '高山大海一路前行，一次别致的户外徒步',
                tag: '攻略',
                author: '伊周',
                pos: '丽江 大理 鲤鱼湖',
                publishTime: '2019-10-01',
                collectionNum: '3215',
                messageNum: '67'
            },
            {
                title: '高山大海一路前行，一次别致的户外徒步',
                tag: '攻略',
                author: '伊周',
                pos: '丽江 大理 鲤鱼湖',
                publishTime: '2019-10-01',
                collectionNum: '3215',
                messageNum: '67'
            }
        ];
        this.notes = notes;
    };
    SharePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-share',template:/*ion-inline-start:"H:\www\skywalker-app\src\pages\share\share.html"*/'<ion-header>\n\n  <ion-navbar class="firstPage">\n\n    <div class="topBackground2"></div>\n\n    <div class="topIcon">\n\n      <ion-buttons left class="firstBtn">\n\n        <button ion-button>\n\n          <ion-icon name="pin"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n      <ion-buttons right>\n\n        <button ion-button>\n\n          <ion-icon name="search" style="padding: 0;"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n      <ion-buttons right (click)="goCreateTrval()">\n\n        <button ion-button>\n\n          <ion-icon name="add" style="padding-left: 0;"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </div>\n\n    <ion-slides pager autoplay="3000" loop="true" autoplayDisableOnInteraction = "true">\n\n      <ion-slide><img src="/assets/imgs/slide0.jpg" alt=""></ion-slide>\n\n      <ion-slide><img src="/assets/imgs/slide1.jpg" alt=""></ion-slide>\n\n      <ion-slide><img src="/assets/imgs/slide2.jpg" alt=""></ion-slide>\n\n    </ion-slides>\n\n  </ion-navbar>\n\n    <ion-segment [(ngModel)]="type">\n\n      <ion-segment-button value="attention">\n\n        关注\n\n      </ion-segment-button>\n\n      <ion-segment-button value="recommend">\n\n        推荐\n\n      </ion-segment-button>\n\n      <ion-segment-button value="travels">\n\n        游记\n\n      </ion-segment-button>\n\n      <ion-segment-button value="raiders">\n\n        攻略\n\n      </ion-segment-button>\n\n      <ion-segment-button value="video">\n\n        视频\n\n      </ion-segment-button>\n\n      <ion-segment-button value="liveBoardcast">\n\n        直播\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n\n\n</ion-header>\n\n<ion-content>\n\n  <div [ngSwitch]="type">\n\n    <ion-list *ngSwitchCase="\'attention\'">\n\n      <ion-item *ngFor="let note of notes">\n\n        <div class="img-box">\n\n          <img src="/assets/imgs/slide1.jpg" alt=""/>\n\n          <h4 class="tit">{{note.title}}</h4>\n\n          <span class="tag">{{note.tag}}</span>\n\n        </div>\n\n        <div class="publish-info">\n\n          <ion-avatar>\n\n            <img src="/assets/imgs/slide0.jpg" alt="">\n\n          </ion-avatar>\n\n          <dl class="left">\n\n            <dt>{{note.author}}</dt>\n\n            <dd><ion-icon name="pin"></ion-icon>{{note.pos}}</dd>\n\n          </dl>\n\n          <div class="right">\n\n            <p>\n\n              <span><ion-icon name="heart-empty"></ion-icon>{{note.collectionNum}}</span>\n\n              <span><ion-icon name="chatboxes"></ion-icon>{{note.messageNum}}</span>\n\n            </p>\n\n            <time>{{note.publishTime}}</time>\n\n          </div>\n\n        </div>\n\n      </ion-item>\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'recommend\'">推荐</ion-list>\n\n    <ion-list *ngSwitchCase="\'travels\'">游记</ion-list>\n\n    <ion-list *ngSwitchCase="\'raiders\'">攻略</ion-list>\n\n    <ion-list *ngSwitchCase="\'video\'">视频</ion-list>\n\n    <ion-list *ngSwitchCase="\'liveBoardcast\'">直播</ion-list>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"H:\www\skywalker-app\src\pages\share\share.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], SharePage);
    return SharePage;
}());

//# sourceMappingURL=share.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FriendPage = (function () {
    function FriendPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    FriendPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-friend',template:/*ion-inline-start:"H:\www\skywalker-app\src\pages\friend\friend.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <h2>Welcome to Ionic!</h2>\n\n  <p>\n\n    This starter project comes with simple tabs-based layout for apps\n\n    that are going to primarily use a Tabbed UI.\n\n  </p>\n\n  <p>\n\n    Take a look at the <code>src/pages/</code> directory to add or change tabs,\n\n    update any existing page or create new pages.\n\n  </p>\n\n</ion-content>\n\n'/*ion-inline-end:"H:\www\skywalker-app\src\pages\friend\friend.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], FriendPage);
    return FriendPage;
}());

//# sourceMappingURL=friend.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TargetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TargetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TargetPage = (function () {
    function TargetPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TargetPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TargetPage');
    };
    TargetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-target',template:/*ion-inline-start:"H:\www\skywalker-app\src\pages\target\target.html"*/'<!--\n\n  Generated template for the TargetPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>target</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"H:\www\skywalker-app\src\pages\target\target.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], TargetPage);
    return TargetPage;
}());

//# sourceMappingURL=target.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__me_setting_me_setting__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__me_my_active_me_my_active__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_core_class_userinfo__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_core_service_data_service__ = __webpack_require__(33);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MePage = (function (_super) {
    __extends(MePage, _super);
    function MePage(dataService, navCtrl, navParams) {
        var _this = _super.call(this, navCtrl, dataService) || this;
        _this.dataService = dataService;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        return _this;
    }
    MePage.prototype.goSettingPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__me_setting_me_setting__["a" /* MeSettingPage */]);
    };
    MePage.prototype.goMyActivePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__me_my_active_me_my_active__["a" /* MeMyActivePage */]);
    };
    MePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MePage');
    };
    MePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-me',template:/*ion-inline-start:"H:\www\skywalker-app\src\pages\me\me.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>个人中心</ion-title>\n\n    <div class="topBackground2"></div>\n\n    <img src="/assets/imgs/slide1.jpg" alt="">\n\n    <ion-buttons right class="rightBtn" (click)="goSettingPage()">\n\n      <button ion-button>\n\n        <ion-icon name="settings"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    \n\n  </ion-navbar>\n\n  <div class="headImgDivOut" (click)="goSettingPage()">\n\n    <div class="imgDiv">\n\n      <img src="{{imgBaseUrl}}" alt="">\n\n    </div>\n\n    <div class="rightDiv">\n\n      <p class="name">{{userInfo?.nickname}}<ion-icon name="man"></ion-icon></p>\n\n      <div class="rightBot">\n\n        <div class="left">\n\n          <p>账号: {{userInfo?.userName||userInfo?.mobilePhone}}</p>\n\n          <p>个签: {{userInfo?.content||\'我这个人很懒，没有说明\'}}</p>\n\n        </div>\n\n        <div class="secondCodeImg">\n\n            <img src="assets/imgs/slide2.jpg" alt="">\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <div class="fourMenu">\n\n    <div class="oneDiv">\n\n      <p><ion-icon name="home"></ion-icon></p>\n\n      <p class="bottomP">我的收藏</p>\n\n    </div>\n\n    <div class="oneDiv">\n\n      <p><ion-icon name="home"></ion-icon></p>\n\n      <p class="bottomP">我的行程</p>\n\n    </div>\n\n    <div class="oneDiv">\n\n      <p><ion-icon name="home"></ion-icon></p>\n\n      <p class="bottomP">我的订单</p>\n\n    </div>\n\n    <div class="oneDiv">\n\n      <p><ion-icon name="home"></ion-icon></p>\n\n      <p class="bottomP">我的贡献</p>\n\n    </div>\n\n  </div>\n\n  <ion-list>\n\n    <button ion-item (click)="itemSelected(item)">\n\n      我的朋友\n\n      <ion-icon name="ios-arrow-forward" float-right></ion-icon>\n\n    </button>  \n\n    <button ion-item (click)="goMyActivePage()">\n\n      我的活动\n\n      <ion-icon name="ios-arrow-forward" float-right></ion-icon>\n\n    </button>  \n\n    <button ion-item (click)="itemSelected(item)">\n\n      我的分享\n\n      <ion-icon name="ios-arrow-forward" float-right></ion-icon>\n\n    </button>  \n\n    <button ion-item (click)="itemSelected(item)">\n\n      我的目的地\n\n      <ion-icon name="ios-arrow-forward" float-right></ion-icon>\n\n    </button>  \n\n    <button ion-item (click)="itemSelected(item)">\n\n      商务合作\n\n      <ion-icon name="ios-arrow-forward" float-right></ion-icon>\n\n    </button>  \n\n    <button ion-item (click)="itemSelected(item)">\n\n      投诉建议\n\n      <ion-icon name="ios-arrow-forward" float-right></ion-icon>\n\n    </button>  \n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"H:\www\skywalker-app\src\pages\me\me.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__app_core_service_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], MePage);
    return MePage;
}(__WEBPACK_IMPORTED_MODULE_4__app_core_class_userinfo__["a" /* UserInfo */]));

//# sourceMappingURL=me.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeSettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_core_class_userinfo__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_core_service_data_service__ = __webpack_require__(33);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var MeSettingPage = (function (_super) {
    __extends(MeSettingPage, _super);
    function MeSettingPage(navCtrl, navParams, actionSheet, dataService, toastCtrl, alertController) {
        var _this = _super.call(this, navCtrl, dataService) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.actionSheet = actionSheet;
        _this.dataService = dataService;
        _this.toastCtrl = toastCtrl;
        _this.alertController = alertController;
        _this.type = 'myInfo';
        _this.gaming = 'boy';
        _this.isNeedCer = true;
        _this.accountFind = true;
        _this.telFind = true;
        _this.seeMyInfo = "all"; // 个人信息查看权限
        _this.shareContent = "onlyFriend"; // 分享内容查看权限
        _this.attendActive = "onlyMe"; // 参与发布活动查看权限
        _this.gender = "male";
        console.log(_this.userInfo);
        return _this;
    }
    MeSettingPage.prototype.getNickName = function (nickName) {
        return nickName.value;
    };
    MeSettingPage.prototype.toastTips = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            cssClass: 'mini',
            position: 'middle',
            duration: 2000
        });
        toast.present();
    };
    MeSettingPage.prototype.nickName = function () {
        return __awaiter(this, void 0, void 0, function () {
            var nickName;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            title: '修改昵称',
                            inputs: [
                                {
                                    name: 'nick',
                                    type: 'text',
                                    placeholder: '请输入昵称'
                                }
                            ],
                            buttons: [
                                {
                                    text: '取消',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (nick) {
                                        console.log(nick);
                                    }
                                },
                                {
                                    text: '确定',
                                    handler: function (res) {
                                        console.log(res);
                                        //nickName.value = res.nick;
                                    }
                                }
                            ]
                        })];
                    case 1:
                        nickName = _a.sent();
                        return [4 /*yield*/, nickName.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MeSettingPage.prototype.password = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var password;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            title: '修改密码',
                            inputs: [
                                {
                                    name: 'oldPassword',
                                    type: 'password',
                                    placeholder: '请输入旧密码'
                                },
                                {
                                    name: 'newPassword',
                                    type: 'password',
                                    placeholder: '请输入新密码'
                                },
                                {
                                    name: 'newPasswordAgain',
                                    type: 'password',
                                    placeholder: '请确认新密码'
                                }
                            ],
                            buttons: [
                                {
                                    text: '取消',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Cancel');
                                    }
                                }, {
                                    text: '确定',
                                    handler: function (res) {
                                        console.log(res);
                                        if (res.newPassword !== res.newPasswordAgain) {
                                            var msg = '两次输入的密码不一致';
                                            _this.toastTips(msg);
                                        }
                                    }
                                }
                            ]
                        })];
                    case 1:
                        password = _a.sent();
                        return [4 /*yield*/, password.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MeSettingPage.prototype.mobilePhone = function () {
        return __awaiter(this, void 0, void 0, function () {
            var mobilePhone;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            title: '修改手机号',
                            inputs: [
                                {
                                    name: 'mobilePhone',
                                    type: 'text',
                                    placeholder: '请输入新手机号码'
                                }
                            ],
                            buttons: [
                                {
                                    text: '取消',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('取消');
                                    }
                                },
                                {
                                    text: '确定',
                                    handler: function () {
                                        console.log('确定');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        mobilePhone = _a.sent();
                        return [4 /*yield*/, mobilePhone.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MeSettingPage.prototype.weChat = function () {
        return __awaiter(this, void 0, void 0, function () {
            var weChat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            title: '微信',
                            inputs: [
                                {
                                    name: 'weChat',
                                    type: 'text',
                                    placeholder: '请输入微信号',
                                }
                            ],
                            buttons: [
                                {
                                    text: '取消',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('取消');
                                    }
                                },
                                {
                                    text: '确定',
                                    handler: function (res) {
                                        console.log(res);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        weChat = _a.sent();
                        return [4 /*yield*/, weChat.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MeSettingPage.prototype.qq = function () {
        return __awaiter(this, void 0, void 0, function () {
            var qq;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            title: 'QQ',
                            inputs: [
                                {
                                    name: 'weChat',
                                    type: 'text',
                                    placeholder: '请输入QQ号',
                                }
                            ],
                            buttons: [
                                {
                                    text: '取消',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('取消');
                                    }
                                },
                                {
                                    text: '确定',
                                    handler: function (res) {
                                        console.log(res);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        qq = _a.sent();
                        return [4 /*yield*/, qq.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MeSettingPage.prototype.sign = function () {
        return __awaiter(this, void 0, void 0, function () {
            var nickName;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            title: '修改签名',
                            inputs: [
                                {
                                    name: 'sign',
                                    type: 'text',
                                    placeholder: '请填写签名'
                                }
                            ],
                            buttons: [
                                {
                                    text: '取消',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (sign) {
                                        console.log('Confirm Cancel');
                                    }
                                }, {
                                    text: '确定',
                                    handler: function () {
                                        console.log('Confirm Ok');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        nickName = _a.sent();
                        return [4 /*yield*/, nickName.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MeSettingPage.prototype.account = function () {
        return __awaiter(this, void 0, void 0, function () {
            var account;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            title: '账号修改',
                            subTitle: '该账号只允许修改一次，请谨慎处理',
                            inputs: [
                                {
                                    name: 'name1',
                                    type: 'text',
                                    placeholder: '请填写账号'
                                }
                            ],
                            buttons: [
                                {
                                    text: '取消',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                    }
                                }, {
                                    text: '确定',
                                    handler: function () {
                                        console.log('Confirm Ok');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        account = _a.sent();
                        return [4 /*yield*/, account.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MeSettingPage.prototype.area = function () {
        return __awaiter(this, void 0, void 0, function () {
            var area;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            title: '修改地区',
                            inputs: [
                                {
                                    name: 'name1',
                                    type: 'text',
                                    placeholder: '请输入地区'
                                }
                            ],
                            buttons: [
                                {
                                    text: '取消',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                    }
                                }, {
                                    text: '确定',
                                    handler: function () {
                                        console.log('Confirm Ok');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        area = _a.sent();
                        return [4 /*yield*/, area.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MeSettingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MeSettingPage');
    };
    MeSettingPage.prototype.getUserImg = function () {
        var as = this.actionSheet.create({
            title: '选择头像',
            buttons: [
                {
                    text: '拍照',
                    handler: function () {
                        console.log('Destructive clicked');
                    }
                },
                {
                    text: '历史头像',
                    handler: function () {
                        console.log('Archive clicked');
                    }
                },
                {
                    text: '相册',
                    handler: function () {
                        console.log('Archive clicked');
                    }
                },
                {
                    text: '关闭',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        as.present();
    };
    MeSettingPage.prototype.getQrCodeImage = function () {
        var as = this.alertController.create({
            title: '个人二维码',
            message: "123"
        });
        as.present();
    };
    MeSettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-me-setting',template:/*ion-inline-start:"H:\www\skywalker-app\src\pages\me-setting\me-setting.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>个人设置</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-segment [(ngModel)]="type">\n\n    <ion-segment-button value="myInfo">\n\n      <div>\n\n        <ion-icon name="home"></ion-icon>\n\n        <p>个人信息</p>\n\n      </div>\n\n    </ion-segment-button>\n\n    <ion-segment-button value="account">\n\n      <div>\n\n        <ion-icon name="home"></ion-icon>\n\n        <p>账号密码</p>\n\n      </div>\n\n    </ion-segment-button>\n\n    <ion-segment-button value="safe">\n\n      <div>\n\n        <ion-icon name="home"></ion-icon>\n\n        <p>安全隐私</p>\n\n      </div>\n\n    </ion-segment-button>\n\n    <ion-segment-button value="other">\n\n      <div>\n\n        <ion-icon name="home"></ion-icon>\n\n        <p>其他设置</p>\n\n      </div>\n\n    </ion-segment-button>\n\n  </ion-segment>\n\n\n\n  <div [ngSwitch]="type">\n\n    <ion-list class="bottomList" *ngSwitchCase="\'myInfo\'">\n\n      <ion-item (click)="getUserImg()">\n\n        <ion-label fixed>头像</ion-label>\n\n        <ion-avatar item-end>\n\n          <img src="{{imgBaseUrl}}" alt="">\n\n        </ion-avatar>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>昵称</ion-label>\n\n        <ion-input (click)="nickName()" readonly="true" value="{{userInfo?.nickname}}"></ion-input>\n\n      </ion-item>\n\n      <ion-item class="mySecondCode">\n\n        <ion-label (click)="getQrCodeImage()">个人二维码</ion-label>\n\n        <img src="{{userInfo?.qrCodeImage}}" alt="">\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>地区</ion-label>\n\n        <ion-input type="text" readonly="true" (click)="area()" value={{userInfo?.address}}></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>性别</ion-label>\n\n        <!-- <ion-input *ngIf="userInfo?.sex===\'1\'">女</ion-input>\n\n        <ion-input *ngIf="userInfo?.sex===\'0\'">男</ion-input> -->\n\n        <ion-select [(ngModel)]="gender" cancelText="取消" okText="确定">\n\n          <ion-option value="male">男</ion-option>\n\n          <ion-option value="female">女</ion-option>\n\n          <ion-option value="secrecy">保密</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>个性签名</ion-label>\n\n        <!-- <ion-input (click)="sign()">{{userInfo?.sign}}</ion-input> -->\n\n        <ion-textarea (click)="sign()" value="" readonly="true" value={{userInfo?.sign}}>\n\n        </ion-textarea>\n\n      </ion-item>\n\n    </ion-list>\n\n    <ion-list class="bottomList" *ngSwitchCase="\'account\'">\n\n      <ion-item>\n\n        <ion-label>账号<span class="tips">(主账号只允许修改一次)</span></ion-label>\n\n        <ion-input placeholder="" readonly="true" (click)="account()" value="{{userInfo?.userName}}"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>密码</ion-label>\n\n        <ion-input placeholder="" readonly="true" (click)="password()" value="{{userInfo?.oldPassword}}">******</ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>手机号</ion-label>\n\n        <ion-input placeholder="" readonly="true" (click)="mobilePhone()" value="{{userInfo?.mobilePhone}}"></ion-input>\n\n      </ion-item>\n\n      <ion-item-divider color="light"></ion-item-divider>\n\n      <ion-item>\n\n        <ion-label>第三方账号</ion-label>\n\n        <ion-label style="text-align: right;"><ion-icon name="add"></ion-icon></ion-label>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>微信</ion-label>\n\n        <ion-input type="text" (click)="weChat()" readonly="true" value="{{userInfo?.wechatId}}"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>QQ</ion-label>\n\n        <ion-input type="text" (click)="qq()" readonly="true" value="{{userInfo?.qqId}}"></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n    <ion-list class="bottomList safeSetting" *ngSwitchCase="\'safe\'">\n\n      <ion-item>\n\n        <ion-label fixed>添加我为好友是否需要验证</ion-label>\n\n        <ion-toggle type="text" value="" [(ngModel)]="isNeedCer"></ion-toggle>\n\n      </ion-item>\n\n      <div class="myTips">可查询到我的方式</div>\n\n      <ion-item>\n\n        <ion-label fixed>账号</ion-label>\n\n        <ion-toggle type="text" value="" [(ngModel)]="accountFind"></ion-toggle>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label fixed>电话号码</ion-label>\n\n        <ion-toggle type="text" value="" [(ngModel)]="telFind"></ion-toggle>\n\n      </ion-item>\n\n      <div class="myTips">权限设置</div>\n\n      <ion-item>\n\n        <ion-label>个人信息查看权限</ion-label>\n\n        <ion-select [(ngModel)]="seeMyInfo" cancelText="取消" okText="确定">\n\n          <ion-option value="all">所有人</ion-option>\n\n          <ion-option value="onlyMe">仅自己</ion-option>\n\n          <ion-option value="onlyFriend">仅朋友</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>分享内容查看权限</ion-label>\n\n        <ion-select [(ngModel)]="shareContent" cancelText="取消" okText="确定">\n\n          <ion-option value="all">所有人</ion-option>\n\n          <ion-option value="onlyMe">仅自己</ion-option>\n\n          <ion-option value="onlyFriend">仅朋友</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>参与发布活动查看权限</ion-label>\n\n        <ion-select [(ngModel)]="attendActive" cancelText="取消" okText="确定">\n\n          <ion-option value="all">所有人</ion-option>\n\n          <ion-option value="onlyMe">仅自己</ion-option>\n\n          <ion-option value="onlyFriend">仅朋友</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <div class="saveBtn">\n\n        <button ion-button full>保存</button>\n\n      </div>\n\n    </ion-list>\n\n    <ion-list class="bottomList" *ngSwitchCase="\'other\'">\n\n      <div class="otherDiv">\n\n        敬请期待...\n\n      </div>\n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"H:\www\skywalker-app\src\pages\me-setting\me-setting.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__app_core_service_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_core_service_data_service__["a" /* DataService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _f || Object])
    ], MeSettingPage);
    return MeSettingPage;
    var _a, _b, _c, _d, _e, _f;
}(__WEBPACK_IMPORTED_MODULE_2__app_core_class_userinfo__["a" /* UserInfo */]));

//# sourceMappingURL=me-setting.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_login_login__ = __webpack_require__(105);

var UserInfo = (function () {
    function UserInfo(navCtrl, dataService) {
        this.navCtrl = navCtrl;
        this.dataService = dataService;
        this.imgBaseUrl = 'assets/imgs/slide1.jpg';
        this.qrCodeImage = 'assets/imgs/QrCodeImage.jpg';
        this.getAuthorization();
        this.getUserInfo();
        if (!this.authorization) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__pages_login_login__["a" /* LoginPage */]);
        }
    }
    UserInfo.prototype.getAuthorization = function () {
        this.authorization = this.dataService.getStore('authorization');
    };
    UserInfo.prototype.getUserInfo = function () {
        if (this.authorization) {
            this.userInfo = JSON.parse(this.dataService.getStore('userInfo'));
            this.imgBaseUrl = this.dataService.getStore('headImg');
        }
    };
    return UserInfo;
}());

//# sourceMappingURL=userinfo.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams, formBuilder, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.isCheck = false;
        this.showPwd = false;
        this.loginForm = this.formBuilder.group({
            phoneNumber: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            pwd: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            msgCode: [''],
            isCheck: [true]
        });
    }
    RegisterPage.prototype.toastTips = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            cssClass: 'mini',
            position: 'middle',
            duration: 2000
        });
        toast.present();
    };
    RegisterPage.prototype.checkMsCode = function () {
        if (!this.loginForm.controls['isCheck'].value) {
            var msg = "请勾选同意使用条款";
            this.toastTips(msg);
            return;
        }
        ;
        if (!this.loginForm.controls['phoneNumber'].value) {
            var msg = '手机号码不能为空';
            this.toastTips(msg);
            return;
        }
        if (!this.isPhone()) {
            var msg = '手机号码格式不正确';
            this.toastTips(msg);
            return;
        }
        if (!this.loginForm.controls['pwd'].value) {
            var msg = '密码不能为空';
            this.toastTips(msg);
            return;
        }
        if (!this.loginForm.controls['msgCode'].value) {
            var msg = '验证码不能为空';
            this.toastTips(msg);
            return;
        }
    };
    RegisterPage.prototype.sendMsgCode = function () {
        if (!this.loginForm.controls['phoneNumber'].value) {
            var msg = '手机号码不能为空';
            this.toastTips(msg);
            return;
        }
        if (!this.isPhone()) {
            var msg = '手机号码格式不正确';
            this.toastTips(msg);
            return;
        }
    };
    RegisterPage.prototype.isPhone = function () {
        var flag = this.loginForm.controls['phoneNumber'].value
            && /(^1[3|4|5|6|7|8]\d{9}$)|(^09\d{8}$)/.test(this.loginForm.controls['phoneNumber'].value);
        return flag;
    };
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"H:\www\skywalker-app\src\pages\register\register.html"*/'<ion-header>\n\n\n\n    <ion-navbar>\n\n      <ion-title>注册</ion-title>\n\n      <!-- <ion-buttons class="rightBtn" right>\n\n        <button ion-button right>\n\n          登录\n\n        </button>\n\n      </ion-buttons> -->\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content>\n\n    <form [formGroup]="loginForm" (ngSubmit)="checkMsCode()">\n\n        <ion-item class="numberDiv1">\n\n          <div class="numberDiv">\n\n            <span class="left">手　机</span>\n\n            <!-- <span class="box" *ngIf="showPhoneBox"></span> -->\n\n            <input (cut)="forbidden()"\n\n            (copy)="forbidden()"\n\n            (paste)="forbidden()" formControlName="phoneNumber" placeholder="请输入手机号码" type="number" maxlength=11>\n\n            <button type="button" class="closeBtn" *ngIf="loginForm.controls[\'phoneNumber\'].value" (click)="loginForm.controls[\'phoneNumber\'].setValue(\'\')">\n\n              <ion-icon name="ios-close"></ion-icon>\n\n            </button>\n\n          </div>\n\n        </ion-item>\n\n        <ion-item class="numberDiv1 numberPwd">\n\n          <div class="numberDiv">\n\n            <span class="left">密　码</span>\n\n            <!-- <span class="box" *ngIf="showPhoneBox"></span> -->\n\n            <input (cut)="forbidden()"\n\n            (copy)="forbidden()"\n\n            (paste)="forbidden()" formControlName="pwd" placeholder="请输入密码" [type]="showPwd? \'text\':\'password\'" maxlength=11>\n\n            <button type="button" class="closeBtn" *ngIf="loginForm.controls[\'pwd\'].value" (click)="showPwd = !showPwd">\n\n              <ion-icon [name]="showPwd?\'md-eye-off\':\'md-eye\'"></ion-icon>\n\n            </button>\n\n          </div>\n\n        </ion-item>                                                                                                                                                             \n\n        <ion-item class="secondItem">\n\n          <div class="numberDiv">\n\n            <span class="left">验证码</span>\n\n            <!-- <span class="box"></span> -->\n\n            <input formControlName="msgCode" placeholder="验证码" type="number" maxlength=11>\n\n            <button type="button" class="sedmsg" (click)="sendMsgCode()">\n\n              发送验证码\n\n            </button>\n\n          </div>\n\n        </ion-item>\n\n        <div class="aggreThis">\n\n          <ion-checkbox color="danger" formControlName="isCheck"></ion-checkbox>\n\n          <ion-label>我同意<span>天行者服务条款</span>及<span>互联网公约</span></ion-label>\n\n        </div>\n\n        <button class="loginBtn" ion-button full>注册</button>\n\n    </form>\n\n  \n\n    \n\n  \n\n  </ion-content>\n\n  \n\n'/*ion-inline-end:"H:\www\skywalker-app\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeMyActivePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_active_create_active__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__active_detail_active_detail__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_core_service_data_service__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MeMyActivePage = (function () {
    function MeMyActivePage(navCtrl, navParams, dataProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataProvider = dataProvider;
        this.activeType = 'myCreateActive';
        this.objSelf = {};
        this.initData();
        this.getActive();
    }
    MeMyActivePage.prototype.goCreate = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__create_active_create_active__["a" /* CreateActivePage */]);
    };
    MeMyActivePage.prototype.initData = function () {
        var obj = [
            {
                title: '去一个好玩的地方啊嗷嗷待食开发简历都是开飞机安联大厦',
                who: '米宝贝',
                type: '自驾游',
                pos: '丽江 大理 鲤鱼湖',
                startDate: '2019-10-01',
                howLong: '10',
                pay: 'AA',
                commentNum: '5200',
                goodNum: '5200',
            },
            {
                title: '去一个好玩的地方啊嗷嗷待食开发简历都是开飞机安联大厦1',
                who: '米宝贝1',
                type: '自驾游1',
                pos: '丽江 大理 鲤鱼湖1',
                startDate: '2019-10-01',
                howLong: '11',
                pay: 'AA',
                commentNum: '5201',
                goodNum: '5201',
            },
            {
                title: '去一个好玩的地方啊嗷嗷待食开发简历都是开飞机安联大厦发的说法萨达发手动阀手动阀手动阀2',
                who: '米宝贝2',
                type: '自驾游2',
                pos: '丽江 大理 鲤鱼湖2',
                startDate: '2019-10-01',
                howLong: '10',
                pay: 'AA',
                commentNum: '5200',
                goodNum: '5200',
            },
            {
                title: '去一个好玩的地方啊嗷嗷待食开发简历都是开飞机安联大厦3',
                who: '米宝贝3',
                type: '自驾游3',
                pos: '丽江 大理 鲤鱼湖3',
                startDate: '2019-10-01',
                howLong: '10',
                pay: 'AA',
                commentNum: '5200',
                goodNum: '5200',
            },
            {
                title: '去一个好玩的地方啊嗷嗷待食开发简历都是开飞机安联大厦4',
                who: '米宝贝4',
                type: '自驾游4',
                pos: '丽江 大理 鲤鱼湖4',
                startDate: '2019-10-01',
                howLong: '10',
                pay: 'AA',
                commentNum: '5200',
                goodNum: '5200',
            },
            {
                title: '去一个好玩的地方啊嗷嗷待食开发简历都是开飞机安联大厦5',
                who: '米宝贝5',
                type: '自驾游5',
                pos: '丽江 大理 鲤鱼湖5',
                startDate: '2019-10-01',
                howLong: '10',
                pay: 'AA',
                commentNum: '5200',
                goodNum: '5200',
            },
            {
                title: '去一个好玩的地方啊嗷嗷待食开发简历都是开飞机安联大厦6',
                who: '米宝贝6',
                type: '自驾游6',
                pos: '丽江 大理 鲤鱼湖6',
                startDate: '2019-10-01',
                howLong: '10',
                pay: 'AA',
                commentNum: '5200',
                goodNum: '5200',
            },
        ];
        var objSelf = [
            {
                title: '深圳自驾游召集组队中的发生发的是1',
                pos: '深圳 南山 腾讯大厦1',
                startDate: '2019-10-8',
                perpleNum: '12+',
                goodNum: '5200',
                commentNum: '5200'
            },
            {
                title: '深圳自驾游召集组队中的发生发的是2',
                pos: '深圳 南山 腾讯大厦2',
                startDate: '2019-10-8',
                perpleNum: '12+',
                goodNum: '5200',
                commentNum: '5200'
            },
            {
                title: '深圳自驾游召集组队中的发生发的是3',
                pos: '深圳 南山 腾讯大厦3',
                startDate: '2019-10-8',
                perpleNum: '12+',
                goodNum: '5200',
                commentNum: '5200'
            },
            {
                title: '深圳自驾游召集组队中的发生发的是4',
                pos: '深圳 南山 腾讯大厦4',
                startDate: '2019-10-8',
                perpleNum: '12+',
                goodNum: '5200',
                commentNum: '5200'
            },
            {
                title: '深圳自驾游召集组队中的发生发的是5',
                pos: '深圳 南山 腾讯大厦5',
                startDate: '2019-10-8',
                perpleNum: '12+',
                goodNum: '5200',
                commentNum: '5200'
            },
            {
                title: '深圳自驾游召集组队中的发生发的是6',
                pos: '深圳 南山 腾讯大厦6',
                startDate: '2019-10-8',
                perpleNum: '12+',
                goodNum: '5200',
                commentNum: '5200'
            },
            {
                title: '深圳自驾游召集组队中的发生发的是7',
                pos: '深圳 南山 腾讯大厦7',
                startDate: '2019-10-8',
                perpleNum: '12+',
                goodNum: '5200',
                commentNum: '5200'
            },
        ];
        this.objSelf = objSelf;
        this.obj = obj;
    };
    MeMyActivePage.prototype.getActive = function () {
        var _this = this;
        var data = 1;
        this.dataProvider.getData('activity', { 'data': data }).subscribe(function (data) {
            //需要增加统一错误提示
            _this.obj = data.data.list;
            console.log(data);
            console.log("*******");
            console.log(data.data.list);
            for (var _i = 0, _a = data.data.list; _i < _a.length; _i++) {
                var a = _a[_i];
                console.log(a);
                console.log(a.activeTitle);
                console.log(a.listActiveImgDTO.length);
            }
        });
    };
    ;
    MeMyActivePage.prototype.goDetailPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__active_detail_active_detail__["a" /* ActiveDetailPage */], { comeInSelf: true });
    };
    MeMyActivePage.prototype.editActive = function () {
        alert('click editActive btn');
    };
    MeMyActivePage.prototype.stopActive = function () {
        alert('click stopActive btn');
    };
    MeMyActivePage.prototype.deleteActive = function () {
        alert('click deleteActive btn');
    };
    MeMyActivePage.prototype.doInfinite = function (infiniteScroll) {
        setTimeout(function () {
            infiniteScroll.complete();
        }, 1000);
    };
    MeMyActivePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MeMyActivePage');
    };
    MeMyActivePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-me-my-active',template:/*ion-inline-start:"H:\www\skywalker-app\src\pages\me-my-active\me-my-active.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>我的活动</ion-title>\n\n    <ion-buttons right class="rightBtn" (click)="goCreate()">\n\n      <button ion-button>\n\n        <ion-icon name="ios-add"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-segment [(ngModel)]="activeType">\n\n    <ion-segment-button value="myCreateActive">\n\n      我发布的活动\n\n    </ion-segment-button>\n\n    <ion-segment-button value="myAttendActive">\n\n      我参加的活动\n\n    </ion-segment-button>\n\n  </ion-segment>\n\n\n\n  <div [ngSwitch]="activeType">\n\n    <ion-list *ngSwitchCase="\'myCreateActive\'">\n\n      <ion-item *ngFor="let obj of obj" (click)="goDetailPage(obj)">\n\n        <div class="listDiv">\n\n          <div class="imgDiv">\n\n            <img  *ngIf="obj.listActiveImgDTO?.length>0" src="{{BASE_URL+obj.listActiveImgDTO[0].imageUrl}}" alt="">\n\n            <img  *ngIf="obj.listActiveImgDTO?.length==0" src="assets/imgs/slide0.jpg" alt="">\n\n          </div>\n\n          <div>\n\n            <p class="title">{{ obj.activeTitle }}</p>\n\n            <p class="goodNumber">\n\n              <span><ion-icon name="home"></ion-icon> {{ obj.charge }}</span>\n\n              <span><ion-icon name="home"></ion-icon> {{ obj.charge }}</span>\n\n            </p>\n\n            <ion-avatar item-start class="sendImg">\n\n              <img  *ngIf="null!=obj.headImage" src="{{\'data:image/jpg;base64,\'+obj.headImage}}" alt="">\n\n              <img  *ngIf="null==obj.headImage" src="assets/imgs/slide0.jpg" alt="">\n\n            </ion-avatar>\n\n            <p class="whoSend">\n\n              <span class="sss">本活动由<font color="red">{{ obj.nickname }}</font>发起</span>\n\n              <span class="trvalType">{{ obj.typeName }}</span>\n\n            </p>\n\n            <div class="flexDiv">\n\n              <div>\n\n                <p>\n\n                  <ion-icon name="pin"></ion-icon>\n\n                  <span> {{ obj.startAddressName }}-->{{ obj.endAddressName }}</span>\n\n                </p>\n\n                <p>\n\n                  <ion-icon name="md-calendar"></ion-icon>\n\n                  <span> {{ obj.goTime }} 出发, 约{{ obj.days }}天行程</span>\n\n                </p>\n\n              </div>\n\n              <div class="freeDiv">\n\n                <p class="p1">{{ obj.charge }}</p>\n\n                <p class="p2">费用</p>\n\n              </div>\n\n            </div>\n\n          </div>\n\n          <p class="splitLine"></p>\n\n          <div class="picListDiv">\n\n            <ion-item>\n\n              <ion-avatar item-start>\n\n                <img src="assets/imgs/slide0.jpg">\n\n              </ion-avatar>\n\n              <ion-avatar item-start>\n\n                <img src="assets/imgs/slide0.jpg">\n\n              </ion-avatar>\n\n              <ion-avatar item-start>\n\n                <img src="assets/imgs/slide0.jpg">\n\n              </ion-avatar>\n\n              <ion-avatar item-start>\n\n                <img src="assets/imgs/slide0.jpg">\n\n              </ion-avatar>\n\n              <ion-avatar item-start>\n\n                <img src="assets/imgs/slide0.jpg">\n\n              </ion-avatar>\n\n              <span class="perpleNumber">10+</span>\n\n            </ion-item>\n\n          </div>\n\n          <div class="editBtn">\n\n            <span (click)="editActive();$event.stopPropagation()">编辑活动</span>\n\n            <span (click)="stopActive();$event.stopPropagation()">暂停活动</span>\n\n            <span (click)="deleteActive();$event.stopPropagation()">删除</span>\n\n          </div>\n\n        </div>\n\n      </ion-item>\n\n      <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n\n        <ion-infinite-scroll-content loadingSpinner="bubbles"\n\n        loadingText="加载中..."></ion-infinite-scroll-content>\n\n      </ion-infinite-scroll>\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'myAttendActive\'">\n\n      <ion-item *ngFor="let obj of objSelf" (click)="goDetailPage(obj)">\n\n        <div class="selfListDiv">\n\n          <ion-avatar>\n\n            <img src="assets/imgs/slide0.jpg" alt="">\n\n          </ion-avatar>\n\n          <div class="twoFlex">\n\n            <div class="imgDiv">\n\n              <img src="assets/imgs/slide0.jpg" alt="">\n\n            </div>\n\n            <div class="rightDiv">\n\n              <p class="title">{{ obj.title }}</p>\n\n              <p>\n\n                <ion-icon name="pin"></ion-icon>\n\n                <span> {{ obj.pos }}</span>\n\n              </p>\n\n              <p>\n\n                <ion-icon name="md-calendar"></ion-icon>\n\n                <span> {{ obj.startDate }} 出发, 约5天</span>\n\n              </p>\n\n              <p class="splitLine"></p>\n\n              <p class="noTopP">\n\n                <span class="num">{{ obj.perpleNum }}</span>\n\n                <span class="goodNum"><ion-icon name="home"></ion-icon> {{ obj.goodNum }}</span>\n\n                <span class="goodNum goodNum1"><ion-icon name="home"></ion-icon> {{ obj.commentNum }}</span>\n\n              </p>\n\n            </div>\n\n          </div>          \n\n        </div>\n\n      </ion-item>\n\n      <ion-infinite-scroll (ionInfinite)="doInfinite1($event)">\n\n        <ion-infinite-scroll-content loadingSpinner="bubbles"\n\n        loadingText="加载中..."></ion-infinite-scroll-content>\n\n      </ion-infinite-scroll>\n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"H:\www\skywalker-app\src\pages\me-my-active\me-my-active.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__app_core_service_data_service__["a" /* DataService */]])
    ], MeMyActivePage);
    return MeMyActivePage;
}());

//# sourceMappingURL=me-my-active.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(241);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_active_active__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_share_share__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_friend_friend__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_target_target__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_me_me__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_create_active_create_active__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_active_detail_active_detail__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_create_line_create_line__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_people_list_people_list__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_more_people_list_more_people_list__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_travel_line_detail_travel_line_detail__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_group_chat_group_chat__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_me_setting_me_setting__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_login_login__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_register_register__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_me_my_active_me_my_active__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_pop_pop__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_http_http__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_friend_friend__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_share_share__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_target_target__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_me_me__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__core_service_data_service__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_active_active__["a" /* ActivePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_share_share__["a" /* SharePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_friend_friend__["a" /* FriendPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_target_target__["a" /* TargetPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_me_me__["a" /* MePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_create_active_create_active__["a" /* CreateActivePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_active_detail_active_detail__["a" /* ActiveDetailPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_create_line_create_line__["a" /* CreateLinePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_people_list_people_list__["a" /* PeopleListPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_more_people_list_more_people_list__["a" /* MorePeopleListPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_travel_line_detail_travel_line_detail__["a" /* TravelLineDetailPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_group_chat_group_chat__["a" /* GroupChatPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_me_setting_me_setting__["a" /* MeSettingPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_me_my_active_me_my_active__["a" /* MeMyActivePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_pop_pop__["a" /* PopPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {
                    tabsHideOnSubPages: 'true',
                    backButtonIcon: 'ios-arrow-back',
                }, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_active_active__["a" /* ActivePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_share_share__["a" /* SharePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_friend_friend__["a" /* FriendPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_target_target__["a" /* TargetPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_me_me__["a" /* MePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_create_active_create_active__["a" /* CreateActivePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_active_detail_active_detail__["a" /* ActiveDetailPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_create_line_create_line__["a" /* CreateLinePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_people_list_people_list__["a" /* PeopleListPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_more_people_list_more_people_list__["a" /* MorePeopleListPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_travel_line_detail_travel_line_detail__["a" /* TravelLineDetailPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_group_chat_group_chat__["a" /* GroupChatPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_me_setting_me_setting__["a" /* MeSettingPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_me_my_active_me_my_active__["a" /* MeMyActivePage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_pop_pop__["a" /* PopPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_25__providers_http_http__["a" /* HttpProvider */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_30__core_service_data_service__["a" /* DataService */],
                __WEBPACK_IMPORTED_MODULE_26__providers_friend_friend__["a" /* FriendProvider */],
                __WEBPACK_IMPORTED_MODULE_27__providers_share_share__["a" /* ShareProvider */],
                __WEBPACK_IMPORTED_MODULE_28__providers_target_target__["a" /* TargetProvider */],
                __WEBPACK_IMPORTED_MODULE_29__providers_me_me__["a" /* MeProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        //this.setRootPage();
    }
    MyApp.prototype.setRootPage = function () {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
    };
    ;
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"H:\www\skywalker-app\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"H:\www\skywalker-app\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { File, FileEntry } from '@ionic-native/file';
// import { ImageUtilProvider } from '../image-util/image-util';
// import lrz from "lrz";
var HttpProvider = (function () {
    function HttpProvider(http, toastCtrl) {
        this.http = http;
        this.toastCtrl = toastCtrl;
        console.log('Hello HttpProvider Provider');
    }
    HttpProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */]])
    ], HttpProvider);
    return HttpProvider;
}());

//# sourceMappingURL=http.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the FriendProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FriendProvider = (function () {
    function FriendProvider(http) {
        this.http = http;
        console.log('Hello FriendProvider Provider');
    }
    FriendProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], FriendProvider);
    return FriendProvider;
}());

//# sourceMappingURL=friend.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ShareProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ShareProvider = (function () {
    function ShareProvider(http) {
        this.http = http;
        console.log('Hello ShareProvider Provider');
    }
    ShareProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ShareProvider);
    return ShareProvider;
}());

//# sourceMappingURL=share.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TargetProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the TargetProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TargetProvider = (function () {
    function TargetProvider(http) {
        this.http = http;
        console.log('Hello TargetProvider Provider');
    }
    TargetProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], TargetProvider);
    return TargetProvider;
}());

//# sourceMappingURL=target.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the MeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MeProvider = (function () {
    function MeProvider(http) {
        this.http = http;
        console.log('Hello MeProvider Provider');
    }
    MeProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], MeProvider);
    return MeProvider;
}());

//# sourceMappingURL=me.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = (function () {
    function DataService(http) {
        this.http = http;
    }
    /**
     * 获取数据
     * @param uri
     * @param params
     */
    DataService.prototype.getData = function (uri, params) {
        this.setHead();
        return this.http.get(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* BASE_URL */] + uri, { headers: this.headers, params: params });
    };
    /**
     * post 发送数据
     * @param uri
     * @param params
     */
    DataService.prototype.postData = function (uri, params) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__config__["a" /* BASE_URL */] + uri, params);
    };
    /**
     * 设置头部信息
     */
    DataService.prototype.setHead = function () {
        if (this.authorization) {
            return;
        }
        this.authorization = this.getStore('authorization');
        if (!this.authorization) {
            return;
        }
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]().set('authorization', 'Bearer:' + this.authorization);
    };
    /**
     * 获取缓存数据
     * @param name
     */
    DataService.prototype.getStore = function (name) {
        if (!name) {
            return;
        }
        return localStorage.getItem(name);
    };
    /**
     * 设置缓存数据
     * @param name
     * @param content
     */
    DataService.prototype.setStore = function (name, content) {
        if (!name) {
            return;
        }
        if (typeof content !== 'string') {
            content = JSON.stringify(content);
        }
        localStorage.setItem(name, content);
    };
    /**
     * 移除缓存数据
     * @param name
     */
    DataService.prototype.removeStore = function (name) {
        if (!name) {
            return;
        }
        localStorage.removeItem(name);
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], DataService);
    return DataService;
}());

//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateActivePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_line_create_line__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateActivePage = (function () {
    function CreateActivePage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.isSelect = true;
        this.showChoosePayType = false;
        this.allDay = 0;
        this.ulWidth = '1200px';
        this.initData();
    }
    CreateActivePage.prototype.initData = function () {
        var data = [
            {
                imgPath: 'assets/imgs/slide0.jpg',
                title: '推荐'
            },
            {
                imgPath: 'assets/imgs/slide0.jpg',
                title: '自驾游'
            },
            {
                imgPath: 'assets/imgs/slide0.jpg',
                title: '户外约伴'
            },
            {
                imgPath: 'assets/imgs/slide0.jpg',
                title: '户外约伴1'
            },
            {
                imgPath: 'assets/imgs/slide0.jpg',
                title: '户外约伴1'
            },
            {
                imgPath: 'assets/imgs/slide0.jpg',
                title: '户外约伴1'
            },
            {
                imgPath: 'assets/imgs/slide0.jpg',
                title: '户外约伴1'
            },
            {
                imgPath: 'assets/imgs/slide0.jpg',
                title: '户外约伴2'
            }
        ];
        this.ulWidth = data.length * 145 - 10 + 'px';
        this.chooseCreateType = data;
    };
    CreateActivePage.prototype.reduceDay = function () {
        this.allDay ? this.allDay-- : '';
    };
    CreateActivePage.prototype.addDay = function () {
        this.allDay++;
    };
    CreateActivePage.prototype.goCreateLine = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__create_line_create_line__["a" /* CreateLinePage */]);
    };
    CreateActivePage.prototype.closeByMask = function () {
        this.showChoosePayType = false;
    };
    CreateActivePage.prototype.changePayType = function () {
        this.isSelect = !this.isSelect;
    };
    CreateActivePage.prototype.goSelectPyType = function () {
        // const modal = this.modalCtrl.create(ChoosePayTypePage, {});
        // modal.present();
        this.showChoosePayType = true;
    };
    CreateActivePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateActivePage');
    };
    CreateActivePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-active',template:/*ion-inline-start:"H:\www\skywalker-app\src\pages\create-active\create-active.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>发布活动</ion-title>\n\n    <ion-buttons right class="rightBtn">\n\n      <button ion-button><ion-icon name="home"></ion-icon></button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n    <p class="splitP"></p>\n\n    <ion-scroll scrollX="true">\n\n      <ul class="selectType" [ngStyle]="{ \'width\': ulWidth }">\n\n        <li *ngFor="let obj of chooseCreateType">\n\n          <img src="{{ obj.imgPath }}" alt="">\n\n          <p>{{ obj.title }}</p>\n\n        </li>\n\n      </ul>\n\n    </ion-scroll>\n\n    <div class="manyLine">\n\n      <span><ion-icon name="pin"></ion-icon> 活动标题</span>\n\n      <input type="text" placeholder="请输入...">\n\n    </div>\n\n    <div class="manyLine">\n\n      <span><ion-icon name="pin"></ion-icon> 出发地</span>\n\n      <input type="text" placeholder="请输入..." value="深圳">\n\n    </div>\n\n    <div class="manyLine">\n\n      <span><ion-icon name="pin"></ion-icon> 目的地</span>\n\n      <input type="text" placeholder="请输入..." value="大理, 冰雪长城, 玉龙血脉">\n\n    </div>\n\n    <div class="manyLine">\n\n      <span><ion-icon name="pin"></ion-icon> 出发时间</span>\n\n      <ion-datetime displayFormat="YYYY-MM-DD" placeholder="选择日期"  min="1999-01-01" cancelText="取 消" doneText="确 定" [(ngModel)]="myDate"></ion-datetime>\n\n      <p class="calP">\n\n        <span>共</span>\n\n        <span>\n\n          <button (click)="reduceDay()">-</button>\n\n        </span>\n\n        <span>{{ allDay }}</span>\n\n        <span>\n\n          <button (click)="addDay()">\n\n          +\n\n        </button></span>\n\n      </p>\n\n    </div>\n\n    <div class="manyLine">\n\n      <span><ion-icon name="pin"></ion-icon> 费用</span>\n\n      <input type="text" placeholder="请输入..." value="AA" (click)="goSelectPyType()">\n\n    </div>\n\n    <div class="manyLine" (click)="goCreateLine()">\n\n      <span><ion-icon name="pin"></ion-icon> 创建行程</span>\n\n      <input type="text" placeholder="请输入...">\n\n    </div>\n\n    <div class="inputDiv">\n\n        <textarea name="" id="" cols="30" rows="10"></textarea>\n\n        <button ion-button full>Full Button</button>\n\n    </div>\n\n    <div class="bottomImg">\n\n      <img src="assets/imgs/slide0.jpg" alt="">\n\n      <img src="assets/imgs/slide0.jpg" alt="">\n\n    </div>\n\n\n\n    \n\n</ion-content>\n\n\n\n<div *ngIf="showChoosePayType" class="outMaskDiv">\n\n  <div class="mask" (click)="closeByMask()"></div>\n\n  <div class="choosePayType">\n\n    <div class="flexType">\n\n      <span [ngClass]="{\'changeColor\': isSelect}" (click)="changePayType()">AA</span>\n\n      <span [ngClass]="{\'changeColor\': !isSelect}" (click)="changePayType()">非AA</span>\n\n    </div>\n\n    <div *ngIf="!isSelect">\n\n      <div class="inputMoney">\n\n        <input type="number" placeholder="成人">\n\n        <span>￥</span>\n\n      </div>\n\n      <div class="inputMoney">\n\n        <input type="number" placeholder="小孩">\n\n        <span>￥</span>\n\n      </div>\n\n    </div>\n\n    <button ion-button full>确定</button>\n\n  </div>\n\n</div>'/*ion-inline-end:"H:\www\skywalker-app\src\pages\create-active\create-active.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], CreateActivePage);
    return CreateActivePage;
}());

//# sourceMappingURL=create-active.js.map

/***/ })

},[219]);
//# sourceMappingURL=main.js.map