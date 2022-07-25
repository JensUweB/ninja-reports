import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { InvoiceData } from '../models/invoice.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = 'https://invoice.root-its.tech';
  httpHeaders = {
    'X-API-TOKEN': environment.apiToken,
    'X-Requested-With': 'XMLHttpRequest',
  };

  constructor(private httpClient: HttpClient) {}

  loadInvoices(): Observable<InvoiceData> {
    const options = { headers: this.httpHeaders };
    return this.httpClient
      .get(this.baseUrl + '/api/v1/invoices?is_deleted=false', options)
      .pipe(map((data: any) => data as InvoiceData));
  }

  loadExpenses(): Observable<any> {
    const options = { headers: this.httpHeaders };
    return this.httpClient
      .get(this.baseUrl + '/api/v1/expenses', options)
      .pipe(map((data: any) => data as any));
  }

  loadExpenseCategories(): Observable<any> {
    const options = { headers: this.httpHeaders };
    return this.httpClient
      .get(this.baseUrl + '/api/v1/expense_categories', options)
      .pipe(map((data: any) => data as any));
  }
}
