import { createSelector } from '@ngrx/store';
import { Invoice } from 'src/app/models/invoice.model';
import { AppState, State } from '../reducers';

export const select = (state: State) => state.app;

export const selectApiUrl = createSelector<State, AppState, string>(
  select,
  (state: AppState) => state.apiUrl
);

export const selectApiToken = createSelector<State, AppState, string>(
  select,
  (state: AppState) => state.apiToken
);

export const selectInvoices = createSelector<State, AppState, Invoice[]>(
  select,
  (state: AppState) => state.invoices
);

export const selectExpenses = createSelector<State, AppState, Invoice[]>(
  select,
  (state: AppState) => state.expenses
);

export const selectExpensesCategories = createSelector<State, AppState, any[]>(
  select,
  (state: AppState) => state.expensesCategories
);
