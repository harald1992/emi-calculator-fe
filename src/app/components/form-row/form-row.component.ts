import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-form-row',
  templateUrl: './form-row.component.html',
  styleUrl: './form-row.component.scss',
})
export class FormRowComponent {
  @Input({ required: true }) formGroup!: FormGroup;
  @Input({ required: true }) formControlName!: string;

  getFormControl(formControlName: string): FormControl {
    return this.formGroup.get(formControlName) as FormControl;
  }

  getErrors(formControlName: string): false | ValidationErrors | null {
    const formControl = this.getFormControl(formControlName);
    return formControl && formControl.touched && formControl.errors;
  }
}
