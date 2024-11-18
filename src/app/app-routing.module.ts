import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/extranet/landing-page/landing-page.component';
import { ContactUsComponent } from "./pages/extranet/contact-us/contact-us.component";
import { RequestApplicationComponent } from "./pages/extranet/request-application/request-application.component";
import { DevRequestComponent } from "./pages/extranet/dev-request/dev-request.component";

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    pathMatch: 'full',
    data: {
      isExtranet: true
    }
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
    pathMatch: 'full',
    data: {
      isExtranet: true,
    },
  }, {
    path: 'application-request',
    component: RequestApplicationComponent,
    pathMatch: 'full',
    data: {
      isExtranet: true,
    },
  }, {
    path: 'dev-request',
    component: DevRequestComponent,
    pathMatch: 'full',
    data: {
      isExtranet: true,
    },
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
