import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feedback-team-partner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feedback-team-partner.component.html',
  styleUrl: './feedback-team-partner.component.scss'
})
export class FeedbackTeamPartnerComponent {


  
    isEnglish: boolean = false; 
  
  
     constructor(private languageService: LanguageService) {}
  
     ngOnInit() {
   
       this.languageService.isEnglish$.subscribe((status) => {
         this.isEnglish = status;
       });
     }

}
