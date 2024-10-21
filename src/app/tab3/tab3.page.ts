import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { logoFacebook, logoGithub, logoInstagram } from 'ionicons/icons';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {
    addIcons({logoFacebook});
    addIcons({logoGithub});
    addIcons({logoInstagram});

  }
}
