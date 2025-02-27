import { Component, Input, AfterViewInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-join-project-desktop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './join-project-desktop.component.html',
  styleUrl: './join-project-desktop.component.scss'
})
export class JoinProjectDesktopComponent implements AfterViewInit  {

   @Input() projects: any;
   @Input() projectsEnglish: any;
   isEnglish: boolean = false; 


   constructor(private languageService: LanguageService) {}


   ngAfterViewInit(): void { 
    let introElement = document.getElementById('intro');
    if (introElement) {
      introElement.classList.add('animate');
    }
  }



   
     ngOnInit() {
   
       this.languageService.isEnglish$.subscribe((status) => {
         this.isEnglish = status;
       });
     }

}
