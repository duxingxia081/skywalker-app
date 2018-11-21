import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
    {path: '', loadChildren: './tabs/tabs.module#TabsPageModule'},
    {path: 'login', loadChildren: './login/login.module#LoginPageModule'},
    {path: 'friend', loadChildren: './friend/friend.module#FriendPageModule'},
    {path: 'activity', loadChildren: './activity/activity.module#ActivityPageModule'},
    {path: 'share', loadChildren: './share/share.module#SharePageModule'},
    {path: 'destination', loadChildren: './destination/destination.module#DestinationPageModule'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
