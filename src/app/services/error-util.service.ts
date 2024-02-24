import { Injectable } from '@angular/core';
import { ApiError } from '../interfaces/api-error.interface';
import { ERROR_MESSAGES } from '../constants/error-messages';

@Injectable({
  providedIn: 'root',
})
export class ErrorUtilService {
  constructor() {}

  getErrorMessageFromApi(apiError: ApiError): string {
    if (!apiError || !apiError.errors) {
      return ERROR_MESSAGES.DEFAULT_ERROR;
    } else {
      return this.constructErrorMsgFromArray(apiError.errors);
    }
  }

  private constructErrorMsgFromArray(errorMsgs: string[]): string {
    let errorMessage = '';
    errorMsgs.forEach((msg: string) => {
      errorMessage += msg + '\n';
    });
    return errorMessage;
  }
}
