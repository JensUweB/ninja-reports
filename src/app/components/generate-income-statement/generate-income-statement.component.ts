import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Invoice } from 'src/app/models/invoice.model';
import { State } from 'src/app/store';
import { AppState } from 'src/app/store/actions';
import { AppSelectors } from 'src/app/store/selectors';

@Component({
  selector: 'app-generate-income-statement',
  templateUrl: './generate-income-statement.component.html',
  styleUrls: ['./generate-income-statement.component.scss'],
})
export class GenerateIncomeStatementComponent {
  invoices$: Observable<Invoice[]>;
  expenses$: Observable<{ category: any; amount: number }[]>;
  invoicesTotal$: Observable<number>;
  expensesTotal$: Observable<number>;
  total$: Observable<number>;

  constructor(private store: Store<State>) {
    this.store.dispatch(AppState.loadData());
    this.invoices$ = store.select(AppSelectors.selectInvoices);
    this.expenses$ = store.select(AppSelectors.selectExpensesByCategory);
    this.invoicesTotal$ = store.select(AppSelectors.selectInvoicesTotal);
    this.expensesTotal$ = store.select(AppSelectors.selectExpensesTotal);
    this.total$ = store.select(AppSelectors.selectTotal);

    store
      .select(AppSelectors.selectExpensesByCategory)
      .subscribe((data) => console.log('expenses', data));
  }
}
