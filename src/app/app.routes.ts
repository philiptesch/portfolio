import { Routes, RouterModule  } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ImprintComponent } from './terms/imprint/imprint.component';
import { PrivacyPolicyComponent } from './terms/privacy-policy/privacy-policy.component';
import { HeaderComponent } from './main-content/header/header.component';

export const routes: Routes = [
    { path: '', component: MainContentComponent },
    { path: 'terms/imprint', component: ImprintComponent },
    { path: 'terms/privacy-policy', component: PrivacyPolicyComponent } 
    
];
export const routing = RouterModule.forRoot(routes, { anchorScrolling: 'enabled' });