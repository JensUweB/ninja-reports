/* eslint-disable @ngrx/no-multiple-actions-in-effects */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { catchError, map, mergeMap, tap, withLatestFrom } from 'rxjs/operators';
import { AppState } from '../actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { environment } from 'src/environments/environment';
import { AppSelectors } from '../selectors';
import { State } from '../reducers';
import { of } from 'rxjs';

// Create effect class for app to load locales from http://localhost:1337/api/i18n/locales
@Injectable()
export class AppEffects {
  loadData$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppState.loadData),
      withLatestFrom(this.store.select(AppSelectors.selectApiUrl)),
      mergeMap(([action, apiUrl]) => {
        return [
          AppState.loadInvoices({
            url: apiUrl + environment.ninjaApi.invoices + '?is_deleted=false',
          }),
          AppState.loadExpenses({
            url: apiUrl + environment.ninjaApi.expenses + '?is_deleted=false',
          }),
          AppState.loadExpensesCategories({
            url: apiUrl + environment.ninjaApi.expensesCategories,
          }),
        ];
      })
    );
  });

  loadInvoices$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppState.loadInvoices),
      withLatestFrom(this.store.select(AppSelectors.selectApiToken)),
      mergeMap(([action, apiToken]) => {
        const options = {
          headers: {
            'X-API-TOKEN': apiToken,
            'X-Requested-With': 'XMLHttpRequest',
          },
        };
        return this.http.get(action.url, options).pipe(
          map((data: any) => AppState.loadInvoicesSuccess({ data: data.data })),
          catchError((error) => of(AppState.loadError({ error })))
        );
      })
    );
  });

  loadExpenses$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppState.loadExpenses),
      withLatestFrom(this.store.select(AppSelectors.selectApiToken)),
      mergeMap(([action, apiToken]) => {
        const options = {
          headers: {
            'X-API-TOKEN': apiToken,
            'X-Requested-With': 'XMLHttpRequest',
          },
        };
        return this.http.get(action.url, options).pipe(
          map((data: any) => AppState.loadExpensesSuccess({ data: data.data })),
          catchError((error) => of(AppState.loadError({ error })))
        );
      })
    );
  });

  loadExpensesCategories$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppState.loadExpensesCategories),
      withLatestFrom(this.store.select(AppSelectors.selectApiToken)),
      mergeMap(([action, apiToken]) => {
        const options = {
          headers: {
            'X-API-TOKEN': apiToken,
            'X-Requested-With': 'XMLHttpRequest',
          },
        };
        return this.http.get(action.url, options).pipe(
          map((data: any) =>
            AppState.loadExpensesCategoriesSuccess({ data: data.data })
          ),
          catchError((error) => of(AppState.loadError({ error })))
        );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    // eslint-disable-next-line @ngrx/no-typed-global-store
    private store: Store<State>
  ) {
    console.log('[AppEffects] constructor');
  }
}
// this.http.get<any>('http://localhost:1337/api/i18n/locales');
