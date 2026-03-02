import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../shared/material/material-module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [MaterialModule,RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  @Input() collapsed: boolean = false;
}
