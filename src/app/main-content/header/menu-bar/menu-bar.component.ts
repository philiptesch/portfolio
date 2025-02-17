import { Component, HostListener  } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss'
})
export class MenuBarComponent {


  isMenuBarFixed: boolean = false;
  @HostListener('window:scroll', [])



  onWindowScroll(): void {
    let scrollPosition = window.scrollY || document.documentElement.scrollTop;
    let headerElement = document.getElementById('main-content-header');
    
    if (headerElement) {
      let headerHeight = headerElement.offsetHeight;
      this.isMenuBarFixed = scrollPosition > headerHeight;
    }
  }

}
