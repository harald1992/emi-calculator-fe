import { Component, ElementRef, Input } from '@angular/core';

const iconSrc = {
  info: 'assets/icons/info-icon.svg',
  success: 'assets/icons/success-icon.svg',
  warning: 'assets/icons/warning-icon.svg',
  error: 'assets/icons/error-icon.svg',
};

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent {
  @Input() type: 'warning' | 'error' = 'error';
  @Input() enableClose = false;

  get iconSrc() {
    return iconSrc[this.type];
  }
}
