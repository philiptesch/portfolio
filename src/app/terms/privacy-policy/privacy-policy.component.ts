import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../../main-content/services/language.service';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

  isEnglish:boolean =false;
      constructor(private languageService: LanguageService) {}
      
      
        ngOnInit() {
          this.languageService.isEnglish$.subscribe((status) => {
            this.isEnglish = status; 
          });
        }
  
  
        translateInEnglish() {
          this.languageService.toggleLanguage();
        }

}
