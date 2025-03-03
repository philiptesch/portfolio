import { Component, Input, AfterViewInit  } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-el-polo-loco-desktop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './el-polo-loco-desktop.component.html',
  styleUrl: './el-polo-loco-desktop.component.scss'
})
export class ElPoloLocoDesktopComponent implements AfterViewInit  {



  ngAfterViewInit(): void { 
    let introElement = document.getElementById('introTwo');
    if (introElement) {
      introElement.classList.add('animate');
    }
  }

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
