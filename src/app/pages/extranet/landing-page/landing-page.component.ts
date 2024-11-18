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
    else if (url.includes('dev-request')){
      this.activeSection = 'dev-request'
    }
    else {
      this.activeSection = '';
    }
  }

  topTechnologies: string[] = [
    'Node.js',
    'Express',
    'Java',
    'Spring Boot', // Added
    'Python',
    'Django', // Added
    'Flask', // Added
    'Docker',
    'Kubernetes',
    'Jenkins',
    'AWS',
    'Azure',
    'GCP', // Added
    'CI/CD',
    'Postman',
    'Selenium',
    'Terraform',
    'RabbitMQ',
    'Redis',
    'MongoDB',
    'MySQL',
    'PostgreSQL', // Added
    'GraphQL',
    'Apollo Server', // Added
    'Apache Kafka',
    'Nginx',
    'Elasticsearch',
    'Vagrant',
    'SQLite', // Added
    'Laravel', // Added (for PHP)
    'Symfony', // Added (for PHP)
    'Haproxy', // Added
    'ActiveMQ', // Added
    'NATS', // Added
    'Consul', // Added
    'Zookeeper', // Added
    'C#', // Added
    'ASP.NET Core', // Added (for C#)
    'Entity Framework', // Added (for C#)
    'C++', // Added
    'Qt', // Added (for C++)
    'Boost', // Added (for C++)
    'Rust', // Added
    'Go', // Added
    'Fiber', // Added (for Go)
    'Beego', // Added (for Go)
    'VHDL', // Added (for hardware description)
    'Verilog' // Added (for hardware description)
  ];


  bottomTechnologies: string[] = [
    'Angular',
    'React',
    'Vue',
    'TypeScript',
    'JavaScript',
    'HTML5',
    'CSS3',
    'Sass',
    'Bootstrap',
    'Tailwind CSS',
    'Webpack',
    'Gulp',
    'JQuery',
    'Figma',
    'Adobe XD',
    'Sketch',
    'InVision',
    'Framer',
    'Zeplin',
    'Foundation',
    'Grunt',
    'AEM',
    'Pug',
    'Jest',
    'Ember.js',           // Another popular frontend framework
    'Preact',             // Lightweight alternative to React
    'Gatsby',             // React-based framework for building static sites
    'Next.js',            // React framework with server-side rendering
    'Parcel',             // Web application bundler
    'Redux',              // State management library for JavaScript apps
    'Apollo Client',      // GraphQL client for managing data
    'Three.js',           // JavaScript library for 3D graphics
    'D3.js',              // JavaScript library for data visualization
    'Chart.js',           // Simple yet flexible JavaScript charting library
    'Storybook',          // Tool for developing UI components in isolation
    'Cypress',            // End-to-end testing framework
    'Playwright',         // End-to-end testing framework by Microsoft
    'Lottie',             // Library for rendering animations
    'Tachyons',           // Functional CSS for rapid UI development
    'Razor',              // Syntax for dynamically generating HTML in .NET applications
    'Lit',                // Library for building fast, lightweight web components
    'LitElement',         // Base class for building Web Components
    'WebComponents',      // Standard for building encapsulated HTML elements
    'Hyperapp',           // Tiny JavaScript library for building web applications
    'Aurelia',            // Modern framework for building client and server applications
    'Electron',           // Framework for building cross-platform desktop apps with web technologies
    'Quasar',             // Vue.js framework for building responsive websites and applications
    'NativeScript',       // Framework for building native mobile apps with Angular, Vue, or JavaScript
    'Ionic',              // Framework for building cross-platform mobile apps with web technologies
    'Meteor',             // Full-stack platform for building web and mobile apps
    'Nuxt.js'             // Vue.js framework for server-side rendering and static site generation
  ];

}
