import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-join-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './join-project.component.html',
  styleUrl: './join-project.component.scss'
})
export class JoinProjectComponent {


  @Input() projects: any;
}
