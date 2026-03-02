import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from '../../shared/material/material-module';
import { ApInvoiceService } from '../../shared/services/ap-invoice.service';
import { SnackbarService } from '../../shared/services/snackbar.service';

@Component({
  selector: 'app-ap-invoices',
  standalone: true,
  imports: [MaterialModule, ReactiveFormsModule],
  templateUrl: './ap-invoices.html',
  styleUrl: './ap-invoices.css',
})
export class ApInvoicesComponent implements OnInit {
  invoiceForm!: FormGroup;
  submitting = false;

  constructor(
    private fb: FormBuilder,
    private apInvoiceService: ApInvoiceService,
    private snackbar: SnackbarService
  ) {}

  ngOnInit(): void {
    this.invoiceForm = this.fb.group({
      invoiceDate: ['', Validators.required],
      vendorName: ['', Validators.required],
      payableAccountId: [0, Validators.required],
      expenseAccountId: [0, Validators.required],
      taxAccountId: [0, Validators.required],
      subTotal: [0, [Validators.required, Validators.min(0)]],
      taxTotal: [0, [Validators.required, Validators.min(0)]],
      narration: [''],
    });
  }

  submit() {
    if (this.invoiceForm.invalid || this.submitting) {
      this.snackbar.error('Please fill all required fields');
      return;
    }

    this.submitting = true;
    this.apInvoiceService.create(this.invoiceForm.value).subscribe({
      next: () => {
        this.snackbar.success('Invoice created');
        this.invoiceForm.reset({
          invoiceDate: '',
          vendorName: '',
          payableAccountId: 0,
          expenseAccountId: 0,
          taxAccountId: 0,
          subTotal: 0,
          taxTotal: 0,
          narration: '',
        });
        this.submitting = false;
      },
      error: () => {
        this.submitting = false;
        this.snackbar.error('Failed to create invoice');
      },
    });
  }
}
