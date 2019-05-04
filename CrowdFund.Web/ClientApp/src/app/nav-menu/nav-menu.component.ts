import { Component, OnDestroy, OnInit } from '@angular/core';
import { MsalService, BroadcastService } from '@azure/msal-angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit, OnDestroy {
  isExpanded = false;
  loggedIn: boolean;
  isIframe: boolean;
  private subscription: Subscription;

  constructor(private msalService: MsalService, private broadcastService: BroadcastService) {
    this.isIframe = window !== window.parent && !window.opener;
    if (this.msalService.getUser()) {
      this.loggedIn = true;
    }
    else {
      this.loggedIn = false;
    }
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  logIn() {
    this.msalService.loginRedirect();
  }

  logOut() {
    this.msalService.logout();
  }

  ngOnInit() {

    this.broadcastService.subscribe("msal:loginFailure", (payload) => {
      console.log("login failure " + JSON.stringify(payload));
      this.loggedIn = false;

    });

    this.broadcastService.subscribe("msal:loginSuccess", (payload) => {
      console.log("login success " + JSON.stringify(payload));
      this.loggedIn = true;
    });

  }

  ngOnDestroy() {
    this.broadcastService.getMSALSubject().next(1);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
