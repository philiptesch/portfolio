import { Component } from '@angular/core';
import { JoinProjectDesktopComponent } from './join-project-desktop/join-project-desktop.component';
import { ElPoloLocoDesktopComponent } from './el-polo-loco-desktop/el-polo-loco-desktop.component';
import { CommonModule } from '@angular/common';
import { ProjectStateService } from '../services/project-state.service';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [JoinProjectDesktopComponent, ElPoloLocoDesktopComponent, CommonModule],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})
export class MyProjectsComponent {



  joinIsOpen:boolean = true;
  elPoloIsOpen:boolean = false;
  isEnglish: boolean = false; 

  projects = [
    {
      name: 'Join Project',
      technologies: 'HTML, CSS, JavaScript',
      duration: '2 Monate',
      image: 'assets/img/join_project (1).png',
      description: 'Task-Manager inspiriert vom Kanban-System. Erstelle und organisiere Aufgaben mit Drag-and-Drop-Funktionen, weise Benutzer und Kategorien zu.',
      workOrganization: 'Ich habe mit Kanban und regelmäßigen Standups meine Arbeit organisiert.',
      experience: 'Meine Erfahrung in der Gruppenarbeit',
      groupExperience: 'Ich war für die Implementierung der Authentifizierung und die Interaktionen auf der Board-Seite verantwortlich.'
    },
    {
      name: 'El Pollo Loco ',
      technologies: 'Angular, TypeScript, Firebase',
      duration: '5 Wochen',
      image: 'assets/img/game_project.png',
      description: 'Ein einfaches Jump-and-Run-Spiel basierend auf einem objektorientierten Ansatz. Hilf Pepe, Münzen und Chiliflaschen zu finden, um gegen die wilden Hühner zu kämpfen..',
      workOrganization: 'Ich habe mit Scrum und agilen Methoden meine Arbeit organisiert.',
      experience: 'meine Erfahrungen',
      groupExperience: 'Ich habe die Datenbank-Integration und das User-Management übernommen.'
    }
  ];

  projectsEnglish = [
    {
      name: 'Join Project',
      technologies: 'HTML, CSS, JavaScript',
      duration: '2 months',
      image: 'assets/img/join_project (1).png',
      description: 'Task manager inspired by the Kanban system. Create and organize tasks with drag-and-drop functionality, assign users and categories.',
      workOrganization: 'I organized my work using Kanban and regular stand-ups.',
      experience: 'My experience in group work',
      groupExperience: 'I was responsible for implementing authentication and interactions on the board page.'
    },
    {
      name: 'El Pollo Loco',
      technologies: 'Angular, TypeScript, Firebase',
      duration: '5 weeks',
      image: 'assets/img/game_project.png',
      description: 'A simple jump-and-run game based on an object-oriented approach. Help Pepe find coins and chili bottles to fight against the wild chickens.',
      workOrganization: 'I organized my work using Scrum and agile methods.',
      experience: 'My experiences',
      groupExperience: 'I took care of the database integration and user management.'
    }
  ];

  constructor(private projectStateService: ProjectStateService,private languageService: LanguageService ) {
    this.projectStateService.projectState$.subscribe((isJoinOpen) => {
      this.joinIsOpen = isJoinOpen;
      this.elPoloIsOpen = !isJoinOpen;
    });
  }

  ngOnInit() {

    this.languageService.isEnglish$.subscribe((status) => {
      this.isEnglish = status;
    });
  }


  openProjectElPoloLoco() {
    this.projectStateService.setProjectState(false);
  }

  openProjectJoin() {
    this.projectStateService.setProjectState(true);
  }


}
