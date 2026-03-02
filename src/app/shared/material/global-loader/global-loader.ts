import { Component } from '@angular/core';
import { LoaderService } from '../../services/loader.service';
import { Observable } from 'rxjs';
import { MaterialModule } from '../material-module';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-global-loader',
  imports: [MatProgressBarModule, MaterialModule],
  standalone: true,
  templateUrl: './global-loader.html',
  styleUrls: ['./global-loader.css']
})
export class GlobalLoader {

  loading$!: Observable<boolean>;

  constructor(private loader: LoaderService) {
    this.loading$ = this.loader.loading$;
  }
}
