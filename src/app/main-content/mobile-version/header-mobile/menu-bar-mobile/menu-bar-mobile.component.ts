import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LanguageService} from '../../../services/language.service';
@Component({
  selector: 'app-menu-bar-mobile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-bar-mobile.component.html',
  styleUrl: './menu-bar-mobile.component.scss'
})
export class MenuBarMobileComponent {
  
  @Input() isMenuOpen: boolean = false;
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

      focusColor(link: string): void {
        this.clicked = link;
      }
  
}
