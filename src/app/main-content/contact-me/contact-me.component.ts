import { HttpClient } from '@angular/common/http';
import { Component, inject, ViewChild, ElementRef } from '@angular/core';
import { FormsModule, NgForm, } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {


  @ViewChild('usernameInput') usernameInput!: ElementRef;
  @ViewChild('useremailInput') useremailInput!: ElementRef;
  @ViewChild('usermessageInput') usermessageInput!: ElementRef;

hoverdArrow: boolean = false;
checked: boolean = false;
privacyTouched: boolean = false; 
arrow = 'arrow_up.png';
isNotChecked= 'Property 1=error.png';
isChecked ='check_icon.png';
isFormValid: boolean = false;
http = inject(HttpClient);

contactData = {
  name: "",
  email: "",
  message:""
}


nameInvalid: boolean = false;
emailInvalid: boolean = false;
messageInvalid: boolean = false;
isEnglish: boolean = false; 
successMessage: boolean = false

  post = {
    endPoint: 'https://philip-tesch.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'application/json' 
      },
      responseType: 'text' as 'json' 
    }
  };

  constructor(private languageService: LanguageService ) {

  }

  ngOnInit() {

    this.languageService.isEnglish$.subscribe((status) => {
      this.isEnglish = status;
    });
  }


  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData), this.post.options)
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
          },
          complete: () => {
          },
        });
    }
  }


checkInputFieldEmail() {
  let userEmail = this.useremailInput.nativeElement.value;
  return !this.emailIsValid(userEmail) || userEmail.length < 3 || userEmail.length > 30
}


checkInputFieldName() {
  let username = this.usernameInput.nativeElement.value;
  return !this.nameIsNotValid(username) || username.length < 3 || username.length > 30;
}


checkInputFieldMessage() {
  let userMessage = this.usermessageInput.nativeElement.value;
  return userMessage.length < 3;
}


checkPrivacy() {
  this.privacyTouched = true;
  this.checked =   !this.checked;
  if (this.checked) {
    this.isChecked ='is_checked.png';
    this.isFormValid = true;
}else {
  this.isChecked ='check_icon.png';
  this.isFormValid = false;
    
}


}

sendMessage(event: Event) {
  event.preventDefault(); 

  if (!(this.checked && this.isFormValid && !this.checkInputFieldName() && !this.checkInputFieldEmail() && !this.checkInputFieldMessage())) {
    if (!this.checked) {  
      this.isChecked = 'Property 1=error.png';
      this.privacyTouched = true;
    }
    return; 
  }


  this.contactData = {
    name: "",
    email: "",
    message: ""
  };

  this.successMessage = true;
  this.isChecked = 'check_icon.png';

  setTimeout(() => {
    this.successMessage = false;
    this.checked = false;
    this.privacyTouched = false;
  }, 5000);
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
