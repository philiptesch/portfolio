import { Component } from '@angular/core';
import { MenuBarComponent } from './menu-bar/menu-bar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenuBarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  hoveredLogo:boolean = false;
  hoveredSocialIconEmail:boolean = false;
  hoveredSocialIconLinkedin:boolean = false;
  hoveredSocialIconGitHub:boolean = false;
  hoveredBgShape:boolean = false;
  logoImg: string = 'logo.png'
  iconGitHub: string = 'Property 1=default (2).png'
  iconLinkedin: string = 'Property 1=default (4).png'
  iconEmail: string = 'Property 1=default (3).png'
  bgShape: string = 'Property 1=hover.png'
  arrow = 'arrow-down-hover.png';
  hoverdArrow: boolean = false;


  onHover(hovered: boolean) {
    this.hoveredLogo = hovered
    if (this.hoveredLogo) {
      this.logoImg = 'logo_hover (1).png'
      
    }else {
      this.logoImg = 'logo.png'
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
      this.iconEmail = 'Property 1=hover blue.png'
      
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
      const yOffset = -60; // Höhe der fixierten Menüleiste
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



}
