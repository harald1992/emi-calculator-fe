import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPage } from './pages/not-found/not-found.page';
import { EmiCalculatorPage } from './pages/emi-calculator/emi-calculator.page';

const routes: Routes = [
  { path: 'emi-calculator', component: EmiCalculatorPage },
  { path: 'not-found', component: NotFoundPage },
  { path: '', redirectTo: 'emi-calculator', pathMatch: 'full' },
  { path: '**', component: NotFoundPage },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
