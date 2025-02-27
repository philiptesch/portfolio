import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {


  isClicked: boolean = false;
  isEnglish:boolean =false;

  constructor(private languageService: LanguageService) {}


  ngOnInit() {
    this.languageService.isEnglish$.subscribe((status) => {
      this.isEnglish = status; 
    });
  }


  onIconClick() {
    this.isClicked = !this.isClicked; 
  }

  onIconHover(hovered: boolean) {
    this.isClicked = hovered
  }

  onIconHoverMouseEnter(hovered: boolean) {
    this.isClicked = hovered
  }
}


