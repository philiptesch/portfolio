import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-el-polo-loco-desktop',
  standalone: true,
  imports: [],
  templateUrl: './el-polo-loco-desktop.component.html',
  styleUrl: './el-polo-loco-desktop.component.scss'
})
export class ElPoloLocoDesktopComponent {

   @Input() projects: any;
}
