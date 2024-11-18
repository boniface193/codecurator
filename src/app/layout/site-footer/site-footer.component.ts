import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'app-site-footer',
  templateUrl: './site-footer.component.html',
  styleUrls: ['./site-footer.component.css']
})
export class SiteFooterComponent implements OnInit {
  @Input() isExtranet: boolean;
  year: number;

  constructor() { }

  ngOnInit(): void {
    this.year = new Date().getFullYear()
  }

}
