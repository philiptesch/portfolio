import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { WhyMeComponent } from './why-me/why-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { FeedbackTeamPartnerComponent } from './feedback-team-partner/feedback-team-partner.component';
import { ContactMeComponent } from "./contact-me/contact-me.component";

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [HeaderComponent, WhyMeComponent,  MySkillsComponent,
    MyProjectsComponent, FeedbackTeamPartnerComponent, ContactMeComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
