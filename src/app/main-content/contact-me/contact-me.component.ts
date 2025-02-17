import { HttpClient } from '@angular/common/http';
import { Component, inject, ViewChild, ElementRef } from '@angular/core';
import { FormsModule, NgForm, } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {


  @ViewChild('usernameInput') usernameInput!: ElementRef;
  @ViewChild('useremailInput') useremailInput!: ElementRef;
  @ViewChild('usermessageInput') usermessageInput!: ElementRef;

hoverdArrow: boolean = false;
arrow = 'arrow_up.png';
http = inject(HttpClient);

contactData = {
  name: "",
  email: "",
  message:""
}


mailTest = true;
nameInvalid: boolean = false;
emailInvalid: boolean = false;
messageInvalid: boolean = false;

post = {
  endPoint: 'https://philip-tesch.de/sendMail.php',
  body: (payload: any) => JSON.stringify(payload),
  options: {
    headers: {
      'Content-Type': 'text/plain',
      responseType: 'text',
    },
  },
};


onSubmit(ngForm: NgForm) {
  if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
    this.http.post(this.post.endPoint, this.post.body(this.contactData))
      .subscribe({
        next: (response) => {

          ngForm.resetForm();
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => console.info('send post complete'),
      });
  } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

    ngForm.resetForm();
  }
}




onHoverArrow(hovered: boolean) {
    this.hoverdArrow = hovered
    if (this.hoverdArrow) {
        this.arrow = 'arrow_up_hover.png'
    }else {
      this.arrow = 'arrow_up.png'
  }
}


scrollToMainContent(): void {
  const mainContentElement = document.getElementById('main-content-header');
  if (mainContentElement) {
    mainContentElement.scrollIntoView({ behavior: 'smooth' });

    setTimeout(() => {
      this.arrow = 'arrow_up.png';
    }, 500);
  }
}



checkEnterName() {
  let username = this.usernameInput.nativeElement.value;

  if (!this.nameIsNotValid(username) || username.length < 3 || username.length > 30) {
    this.nameInvalid = true; 
  } else {
    this.nameInvalid = false; 
  }
  


}

checkEnterMail() {
  let userEmail = this.useremailInput.nativeElement.value;

  if (!this.emailIsValid(userEmail) || userEmail.length < 3 || userEmail.length > 30) {
    this.emailInvalid = true; 
  } else {
    this.emailInvalid = false; 
  }
}


checkEnterMessage() {
  let userMessage = this.usermessageInput.nativeElement.value;

  if (userMessage.length < 3 ) {
    this.messageInvalid = true; 
  } else {
    this.messageInvalid = false; 
  }
}

nameIsNotValid(username: string): boolean {
  const nameCheck = /^[A-Za-zäöüÄÖÜß]+\s[A-Za-zäöüÄÖÜß]+$/;
  return nameCheck.test(username);
}



emailIsValid(usermail: string): boolean {
  let emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailCheck.test(usermail);
}


}
