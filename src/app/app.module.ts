import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MyApp} from './app.component';


import {ActivePage} from '../pages/active/active';
import {SharePage} from '../pages/share/share';
import {FriendPage} from '../pages/friend/friend';
import {TabsPage} from '../pages/tabs/tabs';
import {TargetPage} from '../pages/target/target';
import {MePage} from '../pages/me/me';
import {CreateActivePage} from '../pages/create-active/create-active';
import {ActiveDetailPage} from '../pages/active-detail/active-detail';
import {CreateLinePage} from '../pages/create-line/create-line';
import {PeopleListPage} from '../pages/people-list/people-list';
import {MorePeopleListPage} from '../pages/more-people-list/more-people-list';
import {TravelLineDetailPage} from '../pages/travel-line-detail/travel-line-detail';
import {GroupChatPage} from '../pages/group-chat/group-chat'
import {MeSettingPage} from '../pages/me-setting/me-setting';
import {LoginPage} from '../pages/login/login';
import {RegisterPage} from '../pages/register/register';
import {MeMyActivePage} from '../pages/me-my-active/me-my-active'
import {PopPage} from '../pages/pop/pop';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {HttpProvider} from '../providers/http/http';
import {FriendProvider} from '../providers/friend/friend';
import {ShareProvider} from '../providers/share/share';
import {TargetProvider} from '../providers/target/target';
import {MeProvider} from '../providers/me/me';
import {DataService} from "./core/service/data.service";

@NgModule({
  declarations: [
    MyApp,
    ActivePage,
    SharePage,
    FriendPage,
    TabsPage,
    TargetPage,
    MePage,
    CreateActivePage,
    ActiveDetailPage,
    CreateLinePage,
    PeopleListPage,
    MorePeopleListPage,
    TravelLineDetailPage,
    GroupChatPage,
    MeSettingPage,
    LoginPage,
    RegisterPage,
    MeMyActivePage,
    PopPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: 'true',
      backButtonIcon: 'ios-arrow-back',
    }),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ActivePage,
    SharePage,
    FriendPage,
    TabsPage,
    TargetPage,
    MePage,
    CreateActivePage,
    ActiveDetailPage,
    CreateLinePage,
    PeopleListPage,
    MorePeopleListPage,
    TravelLineDetailPage,
    GroupChatPage,
    MeSettingPage,
    LoginPage,
    RegisterPage,
    MeMyActivePage,
    PopPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpProvider,
    HttpClientModule,
    DataService,
    FriendProvider,
    ShareProvider,
    TargetProvider,
    MeProvider
  ]
})
export class AppModule {
}

