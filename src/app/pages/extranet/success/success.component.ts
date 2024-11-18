import { Component, Input, OnInit } from '@angular/core';
import {BsModalRef} from "ngx-bootstrap/modal";

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  lottieIconPath: string = 'assets/lottie/success.json';
  @Input()
  additionalMsg: any;

  constructor(private modalRef: BsModalRef) { }

  ngOnInit(): void {
  }
  close(){
    this.modalRef.hide();
  }
}
