import { createAction, props } from '@ngrx/store';

export const setApiState = createAction(
  '[App] Set API url and token',
  props<{ apiUrl: string; apiToken: string }>()
);

export const loadData = createAction('[App] Load data from API');

export const loadInvoices = createAction(
  '[App] Load invoices from API',
  props<{ url: string }>()
);

export const loadExpenses = createAction(
  '[App] Load expenses from API',
  props<{ url: string }>()
);

export const loadExpensesCategories = createAction(
  '[App] Load expenses categories from API',
  props<{ url: string }>()
);

export const loadInvoicesSuccess = createAction(
  '[App] Invoices loaded successfully',
  props<{ data: any }>()
);

export const loadExpensesSuccess = createAction(
  '[App] Expenses loaded successfully',
  props<{ data: any }>()
);

export const loadExpensesCategoriesSuccess = createAction(
  '[App] Expenses categories loaded successfully',
  props<{ data: any }>()
);

export const loadError = createAction(
  '[App] Load error',
  props<{ error: any }>()
);
