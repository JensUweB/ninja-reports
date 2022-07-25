import { createReducer, on } from '@ngrx/store';
import { Invoice } from 'src/app/models/invoice.model';
import { AppState } from '../actions';

export interface AppState {
  apiUrl: string;
  apiToken: string;
  invoices: Invoice[];
  expenses: Invoice[];
  expensesCategories: any[];
}

export const initialState: AppState = {
  apiUrl: '',
  apiToken: '',
  invoices: [],
  expenses: [],
  expensesCategories: [],
};

export const appReducer = createReducer(
  initialState,
  on(AppState.setApiState, (state, { apiUrl, apiToken }): any => ({
    ...state,
    apiUrl,
    apiToken,
  })),
  on(AppState.loadInvoicesSuccess, (state, { data }): any => ({
    ...state,
    invoices: data,
  })),
  on(AppState.loadExpensesSuccess, (state, { data }): any => ({
    ...state,
    expenses: data,
  })),
  on(AppState.loadExpensesCategoriesSuccess, (state, { data }): any => ({
    ...state,
    expensesCategories: data,
  }))
);
