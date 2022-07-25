import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerateIncomeStatementComponent } from './components/generate-income-statement/generate-income-statement.component';
import { InvoiceListComponent } from './components/invoice-list/invoice-list.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'start',
  },
  {
    path: 'start',
    component: LoginComponent,
  },
  {
    path: 'tables',
    component: InvoiceListComponent,
  },
  {
    path: 'income-statement',
    component: GenerateIncomeStatementComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
