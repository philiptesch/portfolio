import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills-mobile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-skills-mobile.component.html',
  styleUrl: './my-skills-mobile.component.scss'
})
export class MySkillsMobileComponent {

  isClicked: boolean = false;

  onIconClick() {
    this.isClicked = !this.isClicked;  // Toggle die isClicked-Variable
  }
}



