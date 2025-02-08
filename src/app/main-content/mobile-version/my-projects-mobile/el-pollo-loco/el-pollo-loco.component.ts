import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-el-pollo-loco',
  standalone: true,
  imports: [],
  templateUrl: './el-pollo-loco.component.html',
  styleUrl: './el-pollo-loco.component.scss'
})
export class ElPolloLocoComponent {
 @Input() projects: any;
}
