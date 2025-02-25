import { Component, Input } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-el-polo-loco-desktop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './el-polo-loco-desktop.component.html',
  styleUrl: './el-polo-loco-desktop.component.scss'
})
export class ElPoloLocoDesktopComponent {



  isEnglish: boolean = false; 
   @Input() projects: any;
   @Input() projectsEnglish: any;


   constructor(private languageService: LanguageService) {}

   ngOnInit() {
 
     this.languageService.isEnglish$.subscribe((status) => {
       this.isEnglish = status;
     });
   }
 
}
