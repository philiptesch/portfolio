import { CommonModule } from '@angular/common';
import { Expression } from '@angular/compiler';
import { Component } from '@angular/core';
import { ElPolloLocoComponent } from "./el-pollo-loco/el-pollo-loco.component";
import { JoinProjectComponent } from './join-project/join-project.component';

@Component({
  selector: 'app-my-projects-mobile',
  standalone: true,
  imports: [CommonModule, JoinProjectComponent, ElPolloLocoComponent],
  templateUrl: './my-projects-mobile.component.html',
  styleUrl: './my-projects-mobile.component.scss'
})
export class MyProjectsMobileComponent {
projectJoinIsOpen:boolean = true
projectElPoloIsOpen:boolean = false

  projects = [
    {
      name: 'Join Project',
      technologies: 'HTML, CSS, JavaScript',
      duration: '2 Monate',
      image: 'assets/img/join_project.png',
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




  openProjectElPoloLoco() {
    this.projectElPoloIsOpen = !this.projectElPoloIsOpen;
    this.projectJoinIsOpen = false;
  }



  openProjectJoin() {

    if (this.projectJoinIsOpen) {
        return;
    } else {
    this.projectJoinIsOpen = !this.projectJoinIsOpen;
    this.projectElPoloIsOpen = false;
    }
  }







}


