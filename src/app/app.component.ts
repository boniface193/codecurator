import { Component, OnInit } from "@angular/core";
import { ActivationStart, NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loggingOut: boolean;
  loading: boolean;
  user: any = undefined;
  showDrawer: boolean;
  toastMsg: string;
  showFixedTopMenu: boolean;
  isExtranet = false;
  userResponse = false;

  constructor(
    private router: Router,
    ) {

  }

  ngOnInit() {
    this.router.events.subscribe((data) => {
      if (data instanceof ActivationStart) {
        if (data) {
          this.isExtranet = data.snapshot.data['isExtranet'];
        }
      } else if (data instanceof NavigationStart) {
        this.loading = true;
      } else if (data instanceof NavigationEnd) {
        this.loading = false;
      }
    });

    const storedId: string | null = sessionStorage.getItem('id');
    const id: number = storedId ? parseInt(storedId, 10) : 0;

  }

  get isSystemAdmin(): boolean{
    return this.user?.accounts?.some(x=> x.accountType === 'SYSTEM') ?? false;
  }


}
