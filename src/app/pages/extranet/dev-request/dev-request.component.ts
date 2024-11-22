import { Component, HostListener, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ExtraOptions, NavigationEnd, Router } from "@angular/router";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { environment } from "../../../../environments/environment";
import { AlertComponent } from "../alert/alert.component";
import { BsModalService } from "ngx-bootstrap/modal";

@Component({
  selector: 'app-dev-request',
  templateUrl: './dev-request.component.html',
  styleUrls: ['./dev-request.component.css']
})
export class DevRequestComponent implements OnInit {
  form: FormGroup;
  activeSection = "";
  errorMessage: string;
  showErrorMessageTrigger: boolean;
  sending = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private bsModalService: BsModalService
  ) { }

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
      firstName: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(40),
        ])
      ],
      lastName: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(40),
        ])
      ],
      email: ['',
        Validators.compose([
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(40),
          Validators.pattern(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
          Validators.email
        ])],
      link: ['', Validators.required],
      stack: ['', Validators.required],
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
    } else if (url.includes('dev-request')) {
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
    this.sending = true;

    const templateParams = {
      first_name: this.form.get('firstName').value,
      last_name: this.form.get('lastName').value,
      destination_email: this.form.get('email').value,
      message: this.form.get('message').value,
      portfolio: this.form.get('link').value,
      skills: this.form.get('stack').value,
      current_year: new Date().getFullYear().toString()
    };

    emailjs.send(environment.serviceId, environment.teamRequestTemplateId, templateParams, environment.userId)
      .then((response: EmailJSResponseStatus) => {
        this.sending = false;
        this.successModal()

      }, (error) => {
        this.sending = false;
        this.showErrorMessage(error);

      });
  }

  successModal() {
    const bsModalRef = this.bsModalService.show(AlertComponent, {
      initialState: {
        title: 'Success',
        message: 'Email Sent successfully',
        onConfirm: () => {
          bsModalRef.hide();

        },
        lottieIconPath: './assets/lottie/success.json',
        showConfirmButton: true,
        showCloseButton: false,
        confirmText: 'Confirm'
      },
      ignoreBackdropClick: true
    })
  }

  showErrorMessage(error): void {
    this.errorMessage = error;
    this.showErrorMessageTrigger = true;
    window.scroll(0, 0);
    setTimeout(() => {
      this.showErrorMessageTrigger = false;
    }, 5000);
  }

  getErrorMessage(): string {
    console.log(this.errorMessage)
    return this.errorMessage;
  }
}
