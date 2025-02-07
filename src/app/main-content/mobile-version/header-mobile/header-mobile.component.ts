import { Component } from '@angular/core';
import { MenuBarMobileComponent } from './menu-bar-mobile/menu-bar-mobile.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-mobile',
  standalone: true,
  imports: [MenuBarMobileComponent,CommonModule],
  templateUrl: './header-mobile.component.html',
  styleUrl: './header-mobile.component.scss'
})
export class HeaderMobileComponent {
  imageSrc: string = 'Arrow down.png';
  isMenuOpen: boolean = false;

  howerArrowImg() {
    if (this.imageSrc === 'Arrow down.png') {
      this.imageSrc = 'arrow-down-hover.png';  
    } else {
      this.imageSrc = 'Arrow down.png'; 
    }
  }


  openMenuBar() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
