import { TestBed } from '@angular/core/testing';

import { EmiCalculatorService } from './emi-calculator.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EmiCalculatorService', () => {
  let service: EmiCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(EmiCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
