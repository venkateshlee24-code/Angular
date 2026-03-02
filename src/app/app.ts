import {
  Component,
  signal,
  OnInit,
  DestroyRef,
  inject
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterOutlet
} from '@angular/router';
import { ThemeService } from './shared/services/theme.service';
import { GlobalLoader } from './shared/material/global-loader/global-loader';
import { LoaderService } from './shared/services/loader.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,GlobalLoader],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  protected readonly title = signal('erp-new');

  private readonly router = inject(Router);
  private readonly loader = inject(LoaderService);
  private readonly theme = inject(ThemeService);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {}

  ngOnInit() {
    this.theme.initTheme();

    this.router.events
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          this.loader.show();
        }

        if (
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel ||
          event instanceof NavigationError
        ) {
          this.loader.hide();
        }
      });
  }
}
