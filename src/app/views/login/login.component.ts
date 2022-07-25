import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public apiUrl: string = '';
  public apiToken: string = '';

  constructor(private store: Store, private router: Router) {}

  start(): void {
    this.store.dispatch(
      AppState.setApiState({ apiUrl: this.apiUrl, apiToken: this.apiToken })
    );
    this.router.navigateByUrl('/tables');
  }
}
