import { CommonModule } from '@angular/common';
import { Component, AfterViewInit  } from '@angular/core';
import { LanguageService } from '../../main-content/services/language.service';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent implements AfterViewInit {

  isEnglish:boolean =false;
  clicked: string = ''; 

     constructor(private languageService: LanguageService) {}
      

  ngOnInit() {
    this.languageService.isEnglish$.subscribe((status) => {
      this.isEnglish = status; 
    });
  }


  ngAfterViewInit() {
    let element = document.getElementById('imprint');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }


  translateInEnglish() {
    this.languageService.toggleLanguage();
  }
}
