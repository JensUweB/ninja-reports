import { AsyncPipe } from '@angular/common';
import { Component, Pipe } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store';
import { AppState } from 'src/app/store/actions';
import { AppSelectors } from 'src/app/store/selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public apiUrl: string = '';
  public apiToken: string = '';

  constructor(
    // eslint-disable-next-line @ngrx/no-typed-global-store
    private store: Store<State>,
    private router: Router,
    private asyncPipe: AsyncPipe
  ) {
    this.apiUrl =
      this.asyncPipe.transform(store.select(AppSelectors.selectApiUrl)) || '';
    this.apiToken =
      this.asyncPipe.transform(store.select(AppSelectors.selectApiToken)) || '';
  }

  start(): void {
    this.store.dispatch(
      AppState.setApiState({ apiUrl: this.apiUrl, apiToken: this.apiToken })
    );
    this.router.navigateByUrl('/tables');
  }
}
