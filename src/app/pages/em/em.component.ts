import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ErrorMessages } from '../utils/error-messages';


@Component({
  selector: 'error-message',
  templateUrl: './em.component.html',
  styleUrls: ['./em.component.css']
})
export class EmComponent implements OnInit {
  @Input() form: FormGroup | undefined;
  @Input() controlName: string | undefined;
  @Input() label: string | undefined;
  _customErrorMessages: ErrorMessage[] | undefined;
  private messageMap: ErrorMessage[] | undefined;
  @Input() singularError = false;
  @Input() fontSize = 12;
  color = 'red';

  @Input()
  set customErrorMessages(val) {
    this._customErrorMessages = val;
    this.initializeMessageMap();
  }

  get customErrorMessages(): ErrorMessage[] | undefined {
    return this._customErrorMessages;
  }

  constructor() {}

  ngOnInit(): void {
    this.initializeMessageMap();
  }

  initializeMessageMap(): void {
    this.messageMap = [];
    if (this.customErrorMessages && this.customErrorMessages.length) {
      this.customErrorMessages.forEach((x) => this.messageMap!.push(x));
    }
    ErrorMessages.messages(this.label).forEach((x) => {
      if (
        !(
          this.messageMap!
            .map((x) => x.type.toLowerCase().trim())
            .indexOf(x.type.toLowerCase().trim()) > -1
        )
      ) {
        this.messageMap!.push({ ...x, message: x.message });
      }
    });
  }

  private get control(): AbstractControl | null{
    if (this.controlName == null) {
      return null;
    }
    return this.form!.get(this.controlName);
  }

  get isTouched(): boolean {
    return this.control!.touched;
  }

  get firstError(): string | null{
    return this.errors.at(0) || null;
  }

  get errors(): string[] {
    const errors: string[] = [];
    if (this.control!.errors) {
      Object.keys(this.control!.errors).forEach((x) => {
        const m = this.messageMap!.filter(
          (e) => e.type.toLowerCase().trim() === x.toLowerCase().trim()
        );
        const message = m && m.length ? m[0].message : 'Invalid field';
        if (message) {
          errors.push(message);
        }
      });
    }
    return errors;
  }
}

export interface ErrorMessage {
  type: string;
  message: string;
}
