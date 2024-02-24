import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmiCalculatorPage } from './pages/emi-calculator/emi-calculator.page';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { AlertComponent } from './components/alert/alert.component';
import { FormRowComponent } from './components/form-row/form-row.component';
import { ValueControlAccessorDirective } from './directives/value-control-accessor.directive';

@NgModule({
  declarations: [
    AppComponent,
    EmiCalculatorPage,
    HeaderComponent,
    FooterComponent,
    LoadingSpinnerComponent,
    AlertComponent,
    FormRowComponent,
    ValueControlAccessorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
