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

export const selectInvoicesTotal = createSelector<State, AppState, number>(
  select,
  (state: AppState) =>
    state.invoices.reduce((acc, invoice) => acc + invoice.amount, 0)
);

export const selectExpensesTotal = createSelector<State, AppState, number>(
  select,
  (state: AppState) =>
    state.expenses.reduce((acc, expense) => acc + expense.amount, 0)
);

export const selectTotal = createSelector<State, AppState, number>(
  select,
  (state: AppState) =>
    state.invoices.reduce((acc, invoice) => acc + invoice.amount, 0) -
    state.expenses.reduce((acc, expense) => acc + expense.amount, 0)
);

export const selectExpensesByCategory = createSelector<State, AppState, any[]>(
  select,
  (state: AppState) => {
    return state.expensesCategories.map((category) => ({
      category: category,
      amount: state.expenses
        .filter((expense) => expense.category_id === category.id)
        .reduce((acc, expense) => acc + expense.amount, 0),
    }));
  }
);
