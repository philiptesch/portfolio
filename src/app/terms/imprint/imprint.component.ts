import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../../main-content/services/language.service';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {

  isEnglish:boolean =false;
  clicked: string = ''; 

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
