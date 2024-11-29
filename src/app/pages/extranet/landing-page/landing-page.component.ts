import { Component, HostListener, OnInit } from '@angular/core';
import { RouterModule, ExtraOptions, Router, NavigationEnd } from "@angular/router";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  activeSection = "";
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    console.log('');

    const routerOptions: ExtraOptions = {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
    };

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.checkActiveSection();
      }
    });

    window.addEventListener('hashchange', () => {
      this.checkActiveSection();
    });

    this.checkActiveSection();
  }

  login(): void {
    this.router.navigate(['login']);
  }

  isScrolled = false;

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 0;
  }

  checkActiveSection() {
    const url = this.router.url;
    const hash = window.location.hash;

    if (url.includes('contact-us')) {
      this.activeSection = 'contact-us';
    } else if (hash === '#about') {
      this.activeSection = 'about';
    }
    else if (url.includes('tutors')) {
      this.activeSection = 'tutors'
    }
    else if (url.includes('dev-request')){
      this.activeSection = 'dev-request'
    }
    else {
      this.activeSection = '';
    }
  }

  topTechnologies: string[] = [
    'Biology',
    'Chemistry',
    'Physics',
    'English'
  ];


  bottomTechnologies: string[] = [
    'English',
    'Maths',
    'Physics',
    'Biology',
    'Chemistry',
  ];

}
