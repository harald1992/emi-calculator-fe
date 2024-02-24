import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { EmiRequest } from '../interfaces/emi-request.interface';
import { environment } from '../../environments/environment';
import { EmiResponse } from '../interfaces/emi-response.interface';
import { API_URLS } from '../constants/api-urls';

@Injectable({
  providedIn: 'root',
})
export class EmiCalculatorService {
  constructor(private http: HttpClient) {}

  postEmiForm(emiRequest: EmiRequest) {
    return this.http.post<EmiResponse>(
      environment.emiBASE_URL + API_URLS.EMI,
      emiRequest
    );
  }
}
