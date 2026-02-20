import { Routes } from '@angular/router';
import { PrivacyComponent } from './privacy/privacy.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path: 'privacy', component: PrivacyComponent },
    { path: 'contact', component: ContactComponent },
    { path: '', pathMatch: 'full', redirectTo: '' }
];
