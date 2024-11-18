import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/extranet/landing-page/landing-page.component';
import { SiteFooterComponent } from './layout/site-footer/site-footer.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from "@angular/common/http";
import { ContactUsComponent } from "./pages/extranet/contact-us/contact-us.component";
import { RequestApplicationComponent } from './pages/extranet/request-application/request-application.component';
import { DevRequestComponent } from './pages/extranet/dev-request/dev-request.component';
import { LottieModule } from "ngx-lottie";
import { EmComponent } from "./pages/em/em.component";
import { AlertComponent } from "./pages/extranet/alert/alert.component";
import { SuccessComponent } from "./pages/extranet/success/success.component";
import { ModalModule } from "ngx-bootstrap/modal";

export function lottiePlayerFactory(): any {
  return import(/* webpackChunkName: 'lottie-web' */ 'lottie-web/build/player/lottie_svg');
}



@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SiteFooterComponent,
    ContactUsComponent,
    RequestApplicationComponent,
    DevRequestComponent,
    EmComponent,
    AlertComponent,
    SuccessComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    FormsModule,
    LottieModule.forRoot({ player: lottiePlayerFactory }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  bootstrap: [AppComponent]
})
export class AppModule { }

