import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Invoice, InvoiceData } from 'src/app/models/invoice.model';
import { State } from 'src/app/store';
import { AppState } from 'src/app/store/actions';
import { AppSelectors } from 'src/app/store/selectors';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss'],
})
export class InvoiceListComponent {
  invoices$: Observable<Invoice[]>;
  expenses$: Observable<Invoice[]>;
  categories$: Observable<any[]>;

  // eslint-disable-next-line @ngrx/no-typed-global-store
  constructor(private store: Store<State>) {
    store.dispatch(AppState.loadData());
    this.invoices$ = store.select(AppSelectors.selectInvoices);
    this.expenses$ = store.select(AppSelectors.selectExpenses);
    this.categories$ = store.select(AppSelectors.selectExpensesCategories);
  }
}
