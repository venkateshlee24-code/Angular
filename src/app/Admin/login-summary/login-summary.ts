import { Component, OnInit } from '@angular/core';
import { LoginSummary, LoginSummaryService } from '../../shared/services/login-summary.service';
import { MaterialModule } from '../../shared/material/material-module';


@Component({
  selector: 'app-login-summary',
  imports: [MaterialModule],
  standalone: true,
  templateUrl: './login-summary.html',
  styleUrl: './login-summary.css',
})
export class LoginSummaryComponent implements OnInit {

  data: LoginSummary[] = [];
  totalUsers = 0;
  totalLogins = 0;
  totalMinutes = 0;

  displayedColumns: string[] = [
    'userName',
    'totalLogins',
    'totalMinutesLoggedIn',
    'lastLoginUtc'
  ];

  constructor(private service: LoginSummaryService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.service.getLoginSummary().subscribe(res => {
      this.data = res;

      this.totalUsers = res.length;
      this.totalLogins = res.reduce((sum, u) => sum + u.totalLogins, 0);
      this.totalMinutes = res.reduce((sum, u) => sum + u.totalMinutesLoggedIn, 0);
    });
  }
}
