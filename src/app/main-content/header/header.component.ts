import { Component, HostListener } from '@angular/core';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MenuBarMobileComponent } from '../mobile-version/header-mobile/menu-bar-mobile/menu-bar-mobile.component';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenuBarComponent, MenuBarMobileComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  hoveredLogo:boolean = false;
  hoveredSocialIconEmail:boolean = false;
  hoveredSocialIconLinkedin:boolean = false;
  hoveredSocialIconGitHub:boolean = false;
  hoveredBgShape:boolean = false;
  isMenuOpen: boolean = false;
  logoImg: string = 'Logo icon.png'
  iconGitHub: string = 'Property 1=default (2).png'
  iconLinkedin: string = 'Property 1=default (4).png'
  iconEmail: string = 'Property 1=default (3).png'
  bgShape: string = 'Property 1=hover.png'
  arrow = 'Arrow down.png';
  hoverdArrow: boolean = false;
  screenWidth: number = window.innerWidth; 
  isEnglish:boolean =false;
  menuBarIcon:string = 'Property 1=default.png'
  
    constructor(private languageService: LanguageService) {}
  
  
    ngOnInit() {
      this.languageService.isEnglish$.subscribe((status) => {
        this.isEnglish = status; 
      });
    }



  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateScreenWidth();
  }

  updateScreenWidth() { 
    this.screenWidth = window.innerWidth;
    if (this.screenWidth >= 720) {
      this.isMenuOpen = false;
       this.menuBarIcon = 'Property 1=default.png'
      
    }
  }

  onHoverLogo(hovered: boolean) {
    this.hoveredLogo = hovered
    if (this.hoveredLogo) {
      this.logoImg = 'logo_icon_large.png'
      
    }else {
      this.logoImg = 'Logo icon.png'
  }
  }
  
  onHoverLinkedin(hovered: boolean) {
    this.hoveredSocialIconLinkedin = hovered
    if (this.hoveredSocialIconLinkedin) {
      this.iconLinkedin = 'Property 1=hover blue (1).png'
      
    }else {
      this.iconLinkedin = 'Property 1=default (4).png'
  }
  }
    
  onHoverEmail(hovered: boolean) {
    this.hoveredSocialIconEmail = hovered
    if (this.hoveredSocialIconEmail) {
      this.iconEmail = 'hover_email_icon.png'
      
    }else {
      this.iconEmail = 'Property 1=default (3).png'
  }
  }
    
  onHoverGitHub(hovered: boolean) {
    this.hoveredSocialIconGitHub = hovered
    if (this.hoveredSocialIconGitHub) {
      this.iconGitHub = 'github_Hover.png'
      
    }else {
      this.iconGitHub = 'Property 1=default (2).png'
  }
  }


  onHoverBgShape(hovered: boolean) {
    this.hoveredBgShape = hovered
    if (this.hoveredBgShape) {
      this.bgShape = 'Property 1=hover.png'
      
    }else {
      this.bgShape = 'Bg shape for Photo.png'
  }
  }

  scrollToWhyMe(): void {
    let whyMetElement = document.getElementById('why-me');
    if (whyMetElement) {
      const yOffset = -60; 
      const yPosition = whyMetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: yPosition, behavior: 'smooth' });
  
      setTimeout(() => {
        this.arrow = 'Arrow down.png';
      }, 500);
    }
  }
  



  onHoverArrow(hovered: boolean) {
    this.hoverdArrow = hovered
    if (this.hoverdArrow) {
        this.arrow = 'arrow-down-hover.png'
    }else {
      this.arrow = 'Arrow down.png'
  }
}

openMenuBar() {
  this.isMenuOpen = !this.isMenuOpen;
  if (this.isMenuOpen) {
    this.menuBarIcon = 'close.png'
  } else {
      this.menuBarIcon = 'Property 1=default.png'
  }

}



}
