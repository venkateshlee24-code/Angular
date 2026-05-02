import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export interface ApInvoicePayload {
  invoiceDate: string;
  vendorName: string;
  payableAccountId: number;
  expenseAccountId: number;
  taxAccountId: number;
  subTotal: number;
  taxTotal: number;
  narration: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApInvoiceService {
  private api = `${environment.apiUrl}/api/v1/ap/invoices`;

  constructor(private http: HttpClient) {}

  create(payload: ApInvoicePayload) {
    return this.http.post(this.api, payload);
  }
}
