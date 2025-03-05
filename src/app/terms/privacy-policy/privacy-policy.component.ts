import { CommonModule } from '@angular/common';
import { Component, AfterViewInit  } from '@angular/core';
import { LanguageService } from '../../main-content/services/language.service';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent implements AfterViewInit {

  isEnglish:boolean =false;
      constructor(private languageService: LanguageService) {}
      
      
        ngOnInit() {
          this.languageService.isEnglish$.subscribe((status) => {
            this.isEnglish = status; 
          });
        }

        ngAfterViewInit() {
          let element = document.getElementById('privacy-policy');
          let elementEnglish = document.getElementById('privacy-policy-english');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }

          if (elementEnglish) {
            elementEnglish.scrollIntoView({ behavior: 'smooth' });
          }
        }
  
  
        translateInEnglish() {
          this.languageService.toggleLanguage();
        }

}
