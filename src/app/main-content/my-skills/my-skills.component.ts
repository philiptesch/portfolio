import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {


  isClicked: boolean = false;

  onIconClick() {
    this.isClicked = !this.isClicked;  // Toggle die isClicked-Variable
  }
}
