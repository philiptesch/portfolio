import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-join-project-desktop',
  standalone: true,
  imports: [],
  templateUrl: './join-project-desktop.component.html',
  styleUrl: './join-project-desktop.component.scss'
})
export class JoinProjectDesktopComponent {

   @Input() projects: any;

}
