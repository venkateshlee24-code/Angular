import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

import { MaterialModule } from '../../shared/material/material-module';
import { CompanyService } from '../../shared/services/company.service';
import { SnackbarService } from '../../shared/services/snackbar.service';


@Component({
  selector: 'app-company',
  standalone: true,
  imports: [
    MaterialModule,
    ReactiveFormsModule
  ],
  templateUrl: './company.html',
  styleUrl: './company.css'
})
export class CompanyComponent implements OnInit {

  // ---------- FORM ----------
  companyForm!: FormGroup;

  // ---------- TABLE ----------
  displayedColumns: string[] = [
    'position',
    'companyCode',
    'companyName',
    'currency',
    'status',
    'actions'
  ];

  dataSource = new MatTableDataSource<any>([]);

  constructor(
    private fb: FormBuilder,
    private companyService: CompanyService,
    private snackbar: SnackbarService
  ) {}

  // =============================
  // INIT
  // =============================
  ngOnInit(): void {

    this.companyForm = this.fb.group({
      companyCode: ['', Validators.required],
      companyName: ['', Validators.required],
      baseCurrencyId: [1, Validators.required],
      isActive: [true],
      createdBy: [1]
    });

    this.loadCompanies();
  }

  // =============================
  // CREATE COMPANY
  // =============================
  submit() {

    if (this.companyForm.invalid) {
      this.snackbar.error('Please fill all required fields');
      return;
    }

    this.companyService.createCompany(this.companyForm.value)
      .subscribe({
        next: () => {
          this.snackbar.success('Company Created Successfully');
          this.companyForm.reset();
          this.loadCompanies();
        },
        error: () => {
          this.snackbar.error('Something went wrong');
        }
      });
  }

  // =============================
  // GET COMPANIES
  // =============================
  loadCompanies() {

    this.companyService.getCompanies()
      .subscribe({
        next: (res: any) => {
          this.dataSource.data = res;
        },
        error: () => {
          this.dataSource.data = [];
        }
      });
  }

  // =============================
  // EDIT (placeholder)
  // =============================
  editCompany(row: any) {
    console.log('Edit Company:', row);
  }

  // =============================
  // DELETE (placeholder)
  // =============================
  deleteCompany(row: any) {
    console.log('Delete Company:', row);
  }

}
