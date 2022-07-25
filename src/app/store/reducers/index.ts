import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { appReducer, AppState } from './app.reducer';
import { localStorageSync } from 'ngrx-store-localstorage';

export interface State {
  app: AppState;
}

export const reducers: ActionReducerMap<State> = {
  app: appReducer,
};

export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({
    keys: [
      {
        app: ['apiUrl', 'apiToken'],
      },
    ],
    rehydrate: true,
  })(reducer);
}

export const metaReducers: Array<MetaReducer<any, any>> = [];

// check if in SSR!
if (typeof window !== 'undefined') {
  metaReducers.push(localStorageSyncReducer);
}

export { AppState };
