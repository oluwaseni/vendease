import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Dashboard',
      url: '/folder/Inbox',
      icon: 'mail'
    },
    {
      title: 'Users',
      url: '/folder/dashboard',
      icon: 'paper-plane'
    },
    {
      title: 'Companies',
      url: '/folder/Favorites',
      icon: 'heart'
    },
    {
      title: 'Vendors',
      url: '/folder/Archived',
      icon: 'heart'
    },
    {
      title: 'Products',
      url: '/folder/dboard',
      icon: 'heart'
    },
    {
      title: 'Purchase Order',
      url: '/folder/Spam',
      icon: 'heart'
    }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
