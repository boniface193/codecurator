import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input() title: string;
  @Input() message: string;
  @Input() onConfirm: Function;
  @Input() onClose: Function;
  @Input() lottieIconPath: string;
  @Input() showConfirmButton: boolean;
  @Input() showCloseButton: boolean;
  @Input() confirmText: string;

  constructor(private modalRef: BsModalRef) { }

  ngOnInit(): void {
  }

  close(){
    this.modalRef.hide();
    this.onClose();
  }

  confirm(){
    this.modalRef.hide();
    this.onConfirm();
  }

}
