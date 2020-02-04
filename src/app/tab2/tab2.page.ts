import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Intercom } from '@ionic-native/intercom/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(    private platform: Platform,
                  private intercom: Intercom
    ) {}

showintercommessenger() {
  this.platform.ready().then(() => {
    let randomnumber = Math.random() * 9804;
    let randomnumber1 = randomnumber.toFixed(0);
    let emailid= 'raj' + randomnumber1 + '@gmail.com';

    console.log('Flow reached here.. 101 ', emailid);
    this.intercom.registerIdentifiedUser({userId : emailid}).then(
      () => {
      console.log('Flow reached here.. 103 ', randomnumber);
      this.intercom.setLauncherVisibility('VISIBLE');
            });
  });

}

}
