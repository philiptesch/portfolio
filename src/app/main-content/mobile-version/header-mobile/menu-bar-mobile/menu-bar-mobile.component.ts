import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-bar-mobile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-bar-mobile.component.html',
  styleUrl: './menu-bar-mobile.component.scss'
})
export class MenuBarMobileComponent {
  
  @Input() isMenuOpen: boolean = false;
}
