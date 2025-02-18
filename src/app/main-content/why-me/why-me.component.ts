import { Component } from '@angular/core';

@Component({
  selector: 'app-why-me',
  standalone: true,
  imports: [],
  templateUrl: './why-me.component.html',
  styleUrl: './why-me.component.scss'
})
export class WhyMeComponent {


    //<a href="https://www.flaticon.com/free-icons/arrow" title="arrow icons">Arrow icons created by Jagat Icon - Flaticon</a>
    //<a href="https://www.flaticon.com/free-icons/study" title="study icons">Study icons created by Freepik - Flaticon</a>


    scrollToContactMe(): void {
      let contactMeElement = document.getElementById('contact-me');
      if (contactMeElement) {
        contactMeElement.scrollIntoView({ behavior: 'smooth' });
    
      }
    }

}
