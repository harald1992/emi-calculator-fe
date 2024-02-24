import { TestBed } from '@angular/core/testing';

import { ErrorUtilService } from './error-util.service';
import { ApiError } from '../interfaces/api-error.interface';
import { ERROR_MESSAGES } from '../constants/error-messages';

describe('ErrorUtilService', () => {
  let service: ErrorUtilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorUtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return default error message when apiError is null', () => {
    // Given
    const apiError = {};

    // When
    const errorMessage = service.getErrorMessageFromApi(apiError as ApiError);

    // Then
    expect(errorMessage).toEqual(ERROR_MESSAGES.DEFAULT_ERROR);
  });

  it('getErrorMessageFromApi should properly get an errormessage from ApiError interface', () => {
    // given
    const apiError = { errors: ['Error 1', 'Error 2', 'Error 3'] };

    // when
    const errorMessage = service.getErrorMessageFromApi(apiError);

    // then
    expect(errorMessage).toEqual('Error 1\nError 2\nError 3\n');
  });
});
