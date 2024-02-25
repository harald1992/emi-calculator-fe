import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { EmiCalculatorService } from "../../services/emi-calculator.service";
import { EmiRequest } from "../../interfaces/emi-request.interface";
import { EmiResponse } from "../../interfaces/emi-response.interface";
import { HttpErrorResponse } from "@angular/common/http";
import { ErrorUtilService } from "../../services/error-util.service";
import { KeyValue } from "@angular/common";

const originalOrder = (
  a: KeyValue<string, string>,
  b: KeyValue<string, string>
): number => {
  return 0;
};

@Component({
  selector: "app-emi-calculator",
  templateUrl: "./emi-calculator.page.html",
  styleUrl: "./emi-calculator.page.scss",
})
export class EmiCalculatorPage {
  emiForm: FormGroup = this.fb.group({
    loanAmount: [undefined, [Validators.required, Validators.min(0)]],
    interestRatePercentageYearly: [
      undefined,
      [Validators.required, Validators.min(0), Validators.max(100)],
    ],
    loanTermYears: [
      undefined,
      [Validators.required, Validators.min(0), Validators.max(30)],
    ],
  });

  emiFormLabels: { [key: string]: string } = {
    loanAmount: "Loan Amount.",
    interestRatePercentageYearly: "Yearly Interest Rate.",
    loanTermYears: "Loan Term in Years.",
  };

  originalOrder = originalOrder;

  emiValue: number = 0;
  apiError: string = "";
  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private emiCalculatorService: EmiCalculatorService,
    private errorUtilService: ErrorUtilService
  ) {}

  onSubmit() {
    if (!this.emiForm.valid) {
      this.emiForm.markAllAsTouched(); // mark as touched so all errormessages will appear
    } else {
      this.apiError = "";
      this.isLoading = true;
      this.submitEmiForm();
    }
  }

  private submitEmiForm(): void {
    const emiRequest: EmiRequest = this.emiForm.value;

    this.emiCalculatorService.postEmiForm(emiRequest).subscribe({
      next: (response: EmiResponse) => {
        this.emiValue = response.emi;
        this.isLoading = false;
      },

      error: (error: HttpErrorResponse) => {
        this.apiError = this.errorUtilService.getErrorMessageFromApi(
          error.error
        );
        this.isLoading = false;
      },
    });
  }
}
