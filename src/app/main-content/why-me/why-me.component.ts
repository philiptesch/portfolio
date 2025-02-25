import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-why-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-me.component.html',
  styleUrl: './why-me.component.scss'
})
export class WhyMeComponent {
  isEnglish:boolean =false;

    //<a href="https://www.flaticon.com/free-icons/arrow" title="arrow icons">Arrow icons created by Jagat Icon - Flaticon</a>
    //<a href="https://www.flaticon.com/free-icons/study" title="study icons">Study icons created by Freepik - Flaticon</a>

  
    constructor(private languageService: LanguageService) {}
  
  
    ngOnInit() {
      this.languageService.isEnglish$.subscribe((status) => {
        this.isEnglish = status; 
      });
    }


    scrollToContactMe(): void {
      let contactMeElement = document.getElementById('contact-me');
      if (contactMeElement) {
        contactMeElement.scrollIntoView({ behavior: 'smooth' });
    
      }
    }

}
