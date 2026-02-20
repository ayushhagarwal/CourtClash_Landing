import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, RouterLink],
    templateUrl: './app.component.html'
})
export class AppComponent {
    title = 'CourtClash';
    showMainContent = true;

    constructor(private router: Router) {
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd)
        ).subscribe((event: any) => {
            this.showMainContent = event.url === '/';
        });
    }

    isRouteActive(): boolean {
        return !this.showMainContent;
    }
}
