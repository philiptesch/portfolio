import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../main-content/services/language.service'
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  hoveredSocialIconEmail:boolean = false;
  hoveredSocialIconLinkedin:boolean = false;
  hoveredSocialIconGitHub:boolean = false;
  iconGitHub: string = 'github_dark.png'
  iconLinkedin: string = 'linkedin_dark.png'
  iconEmail: string = 'mail_dark.png'
  isEnglish: boolean = false; 

  constructor(private languageService: LanguageService ) {
  }

  ngOnInit() {

    this.languageService.isEnglish$.subscribe((status) => {
      this.isEnglish = status;
    });
  }

  onHoverLinkedin(hovered: boolean) {
    this.hoveredSocialIconLinkedin = hovered
    if (this.hoveredSocialIconLinkedin) {
      this.iconLinkedin = 'Linkedin button.png'
      
    }else {
      this.iconLinkedin = 'linkedin_dark.png'
  }
  }
    
  onHoverEmail(hovered: boolean) {
    this.hoveredSocialIconEmail = hovered
    if (this.hoveredSocialIconEmail) {
      this.iconEmail = 'Email button.png'
      
    }else {
      this.iconEmail = 'mail_dark.png'
  }
  }
    
  onHoverGitHub(hovered: boolean) {
    this.hoveredSocialIconGitHub = hovered
    if (this.hoveredSocialIconGitHub) {
      this.iconGitHub = 'Github button.png'
      
    }else {
      this.iconGitHub = 'github_dark.png'
  }
  }
}
