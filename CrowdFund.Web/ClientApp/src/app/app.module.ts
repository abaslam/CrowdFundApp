import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MsalModule, MsalGuard } from '@azure/msal-angular'
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { LogLevel } from 'msal';

export function loggerCallback(logLevel, message, piiEnabled) {
  console.log("client logging" + message);
}


export const protectedResourceMap: [string, string[]][] = [['https://graph.microsoft.com/v1.0/me', ['user.read']]];

export const routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'counter', component: CounterComponent },
  { path: 'fetch-data', component: FetchDataComponent, canActivate: [MsalGuard]},
];

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
  
    MsalModule.forRoot({
      clientID: "a7846767-cd7d-425e-941e-6d097ba795ff",
      authority: "https://login.microsoftonline.com/6479a0bc-9188-4501-89d6-54f75f696d73/",
      redirectUri: "https://localhost:44369/",
      validateAuthority: true,
      cacheLocation: "localStorage",
      postLogoutRedirectUri: "https://localhost:44369/",
      navigateToLoginRequestUrl: true,
      popUp: true,
      consentScopes: ["user.read"],
      unprotectedResources: ["https://angularjs.org/"],
      protectedResourceMap: protectedResourceMap,
      logger: loggerCallback,
      correlationId: '1234',
      level: LogLevel.Verbose,
      piiLoggingEnabled: true,
    }),

    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
