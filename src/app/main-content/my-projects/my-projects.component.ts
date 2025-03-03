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
      technologies: 'HTML, CSS, JavaScript, Github, Firebase',
      duration: '2 Monate',
      image: 'assets/img/join_project (1).png',
      description: 'Task-Manager inspiriert vom Kanban-System. Erstelle und organisiere Aufgaben mit Drag-and-Drop-Funktionen, weise Benutzer und Kategorien zu.',
      workOrganization: 'Ich habe mit Kanban und regelmäßigen Standups meine Arbeit organisiert.',
      experience: 'Meine Erfahrung in der Gruppenarbeit',
      groupExperience: 'Ich war für die Implementierung der Authentifizierung und die Interaktionen auf der Board-Seite verantwortlich.'
    },
    {
      name: 'El Pollo Loco ',
      technologies: 'CSS, JavaScript, HTML',
      duration: '5 Wochen',
      image: 'assets/img/game_project.png',
      description: 'Ein Jump-and-Run-Spiel im objektorientierten Ansatz. Hilf Pepe, Münzen und Chiliflaschen zu sammeln, um gegen wilde Hühner zu kämpfen.',
      workOrganization: 'ich entwickelte eine objektorientierte Architektur zur Steuerung der Charakterbewegung und des Sammelns von Items.“',
      experience: 'Meine Erfahrung in der Gruppenarbeit',
      groupExperience: 'Ich war für die Spielmechanik verantwortlich und fügte die Lebensregeneration des Endgegners durch das Fressen kleiner Feinde hinzu.“'
    }
  ];

  projectsEnglish = [
    {
      name: 'Join Project',
      technologies: 'HTML, CSS, JavaScript, Github, Firebase',
      duration: '2 months',
      image: 'assets/img/join_project (1).png',
      description: 'Task manager inspired by the Kanban system. Create and organize tasks with drag-and-drop functionality, assign users and categories.',
      workOrganization: 'I organized my work using Kanban and regular stand-ups.',
      experience: 'My experience in group work',
      groupExperience: 'I was responsible for implementing authentication and interactions on the board page.'
    },
    {
      name: 'El Pollo Loco',
      technologies: 'CSS, JavaScript, HTML',
      duration: '5 weeks',
      image: 'assets/img/game_project.png',
      description: 'A jump-and-run game based on an object-oriented approach. Help Pepe collect coins and chili bottles to fight against wild chickens.',
      workOrganization: 'I developed an object-oriented architecture to control character movement and item collection.',
      experience: 'My experience in teamwork',
  groupExperience: 'I was responsible for the gameplay mechanics and added the final boss\' health regeneration by eating smaller enemies.'
    },
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
