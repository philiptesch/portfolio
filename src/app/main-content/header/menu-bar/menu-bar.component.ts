import { Component, HostListener, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {
  isMenuBarFixed: boolean = false;
  isEnglish: boolean = false; 
  clicked: string = ''; 

  constructor(private languageService: LanguageService) {}

  ngOnInit() {

    this.languageService.isEnglish$.subscribe((status) => {
      this.isEnglish = status;
    });
  }


  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    let scrollPosition = window.scrollY || document.documentElement.scrollTop;
    let headerElement = document.getElementById('main-content-header');
    
    if (headerElement) {
      let headerHeight = headerElement.offsetHeight;
      this.isMenuBarFixed = scrollPosition > headerHeight;
    }
  }


 

  translateInEnglish() {
    this.languageService.toggleLanguage();
  }


  focusColor(link: string): void {
    this.clicked = link;
  }
}

