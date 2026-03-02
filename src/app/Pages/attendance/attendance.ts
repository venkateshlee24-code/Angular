import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../shared/material/material-module';
import { EmployeeService } from '../../shared/services/employee.service';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-attendance',
  imports: [MaterialModule,MatPaginatorModule],
  templateUrl: './attendance.html',
  styleUrl: './attendance.css',
})
export class Attendance implements OnInit {
 employees: any[] = [];
  page = 1;
  pageSize = 20;
  total = 0;

  displayedColumns = [
    'employeeCode',
    'fullName',
    'email',
    'departmentCode',
    'joiningDate',
    'isActive'
  ];

  constructor(
    private employeeService: EmployeeService,
    private cd: ChangeDetectorRef // ✅ ADD THIS
  ) {}

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
    this.employeeService.getEmployees(this.page, this.pageSize)
      .subscribe(res => {

        this.employees = res.items ?? [];
        this.total = res.totalCount ?? 0;

        this.cd.detectChanges(); // ✅ IMPORTANT
      });
  }

  onPageChange(event: any) {
    this.page = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.loadEmployees();
  }
}
