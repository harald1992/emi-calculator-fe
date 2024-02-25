import { ComponentFixture, TestBed } from "@angular/core/testing";

import { FormRowComponent } from "./form-row.component";
import { FormBuilder, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ValueControlAccessorDirective } from "../../directives/value-control-accessor.directive";

describe("FormRowComponent", () => {
  let component: FormRowComponent;
  let fixture: ComponentFixture<FormRowComponent>;
  let formBuilder: FormBuilder;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [FormRowComponent, ValueControlAccessorDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(FormRowComponent);
    component = fixture.componentInstance;
    formBuilder = TestBed.inject(FormBuilder);

    component.formGroup = formBuilder.group({
      exampleControl: [""],
    });
    component.formControlName = "exampleControl";

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
