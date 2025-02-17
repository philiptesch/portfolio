import { Component } from '@angular/core';
import { JoinProjectDesktopComponent } from './join-project-desktop/join-project-desktop.component';
import { ElPoloLocoDesktopComponent } from './el-polo-loco-desktop/el-polo-loco-desktop.component';
import { CommonModule } from '@angular/common';
import { ProjectStateService } from '../services/project-state.service';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [JoinProjectDesktopComponent, ElPoloLocoDesktopComponent, CommonModule],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})
export class MyProjectsComponent {



  joinIsOpen:boolean = true
  elPoloIsOpen:boolean = false

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

  constructor(private projectStateService: ProjectStateService) {
    // Service abonnieren, um den Zustand zu erhalten
    this.projectStateService.projectState$.subscribe((isJoinOpen) => {
      this.joinIsOpen = isJoinOpen;
      this.elPoloIsOpen = !isJoinOpen;
    });
  }

  openProjectElPoloLoco() {
    this.projectStateService.setProjectState(false);
  }

  openProjectJoin() {
    this.projectStateService.setProjectState(true);
  }


}
