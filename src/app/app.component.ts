import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from "./main-content/header/header.component";
import { MenuBarComponent } from './main-content/header/menu-bar/menu-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FooterComponent, HeaderComponent, RouterModule, MenuBarComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
  menuBarFixed = false;

  constructor(private router: Router) {}

  showMenuBar(): boolean {
    return this.router.url.includes('/terms/imprint') || this.router.url.includes('/terms/privacy-policy');
  }

}
