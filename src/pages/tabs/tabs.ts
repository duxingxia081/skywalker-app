import { Component } from '@angular/core';

import { ActivePage } from '../active/active';
import { SharePage } from '../share/share';
import { FriendPage } from '../friend/friend';
import { TargetPage } from '../target/target';
import { MePage } from '../me/me';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = FriendPage;
  tab2Root = ActivePage;
  tab3Root = SharePage;
  tab4Root = TargetPage;
  tab5Root = MePage;
  constructor() {

  }
}
