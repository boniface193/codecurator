import { Component, HostListener, OnInit } from '@angular/core';
import { ExtraOptions, NavigationEnd, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  form: FormGroup;
  activeSection = "";

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
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

  initForm(): void {
    this.form = this.fb.group({
      name: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(40),
        ])
      ],
      message: ['', Validators.required],
    });
  }

  checkActiveSection() {
    const url = this.router.url;
    const hash = window.location.hash;

    if (url.includes('contact-us')) {
      this.activeSection = 'contact-us';
    } else if (hash === '#about') {
      this.activeSection = 'about';
    }
    else if (url.includes('dev-request')){
      this.activeSection = 'dev-request'
    }
    else {
      this.activeSection = '';
    }
  }

  login(): void {
    this.router.navigate(['login']);
  }


  isScrolled = false;
  logoSrc = '/assets/img/logo.svg'; // Default logo source

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 0;
    this.logoSrc = this.isScrolled ? '/assets/img/logo_dark.svg' : ' /assets/img/logo.svg';
  }


  sendEmail(): void {
    this.form.markAllAsTouched();
    if (!this.form.valid) return;

    const subject = encodeURIComponent("Service Inquiry");

    const name = this.form.get('name').value;
    const message = this.form.get('message').value;

    const body = encodeURIComponent(
      `Hello CodeCurator Team,\n\n` +
      `My name is ${name}, and I am reaching out regarding ${message}.`
    );

    window.open(`mailto:codecurator@protonmail.com?subject=${subject}&body=${body}`);
  }




}
