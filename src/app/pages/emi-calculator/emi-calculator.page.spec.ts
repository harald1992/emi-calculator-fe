import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { EmiCalculatorPage } from './emi-calculator.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValueControlAccessorDirective } from '../../directives/value-control-accessor.directive';
import { FormRowComponent } from '../../components/form-row/form-row.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { EmiCalculatorService } from '../../services/emi-calculator.service';
import { delay, of, throwError } from 'rxjs';
import { EmiResponse } from '../../interfaces/emi-response.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiError } from '../../interfaces/api-error.interface';
import { ErrorUtilService } from '../../services/error-util.service';

const EMI_RESPONSE_MOCK: EmiResponse = {
  emi: 123,
};

describe('EmiCalculatorPage', () => {
  let component: EmiCalculatorPage;
  let fixture: ComponentFixture<EmiCalculatorPage>;
  let emiCalculatorService: EmiCalculatorService;
  let errorUtilService: ErrorUtilService;
  let emiServiceSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        EmiCalculatorPage,
        ValueControlAccessorDirective,
        FormRowComponent,
      ],
      imports: [HttpClientTestingModule, FormsModule, ReactiveFormsModule],
      providers: [ErrorUtilService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(EmiCalculatorPage);
    emiCalculatorService = TestBed.inject(EmiCalculatorService);
    errorUtilService = TestBed.inject(ErrorUtilService);

    emiServiceSpy = spyOn(emiCalculatorService, 'postEmiForm').and.returnValue(
      of(EMI_RESPONSE_MOCK).pipe(delay(1))
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not send form when form is invalid', () => {
    spyOn(component.emiForm, 'markAllAsTouched');
    component.onSubmit();
    expect(component.emiForm.markAllAsTouched).toHaveBeenCalled();
  });

  it('should display loading icon and define variables when form is submitted', fakeAsync(() => {
    // given
    component.emiForm.get('loanAmount')?.setValue('1000');
    component.emiForm.get('interestRatePercentageYearly')?.setValue('12');
    component.emiForm.get('loanTermYears')?.setValue('10');
    expect(component.isLoading).toBeFalse();

    // when
    component.onSubmit();
    expect(component.isLoading).toBeTrue();
    tick(2);

    // then
    expect(component.isLoading).toBeFalse();
    expect(component.emiValue).toBe(EMI_RESPONSE_MOCK.emi);
  }));

  it('should handle errormessages', () => {
    // given
    component.emiForm.get('loanAmount')?.setValue('1000');
    component.emiForm.get('interestRatePercentageYearly')?.setValue('12');
    component.emiForm.get('loanTermYears')?.setValue('10');
    const error: ApiError = { errors: ['Oops!'] };
    emiServiceSpy.and.returnValue(
      throwError(() => new HttpErrorResponse({ status: 500, error: error }))
    );

    // when
    component.onSubmit();

    // then
    expect(component.isLoading).toBeFalse();
    expect(component.apiError).toBe('Oops!\n');
  });
});
