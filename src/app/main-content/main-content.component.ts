import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { HeaderMobileComponent } from './mobile-version/header-mobile/header-mobile.component';
import { WhyMeComponent } from './why-me/why-me.component';
import { WhyMeMobileComponent } from './mobile-version/why-me-mobile/why-me-mobile.component';
import { MySkillsMobileComponent } from './mobile-version/my-skills-mobile/my-skills-mobile.component';
import { MySkillsComponent } from './my-skills/my-skills.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [HeaderComponent, HeaderMobileComponent, WhyMeComponent, WhyMeMobileComponent, MySkillsMobileComponent, MySkillsComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
