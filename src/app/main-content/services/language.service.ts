import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private isEnglishSubject: BehaviorSubject<boolean>
  isEnglish$: Observable<boolean>;


  constructor() {
    let stored  =  localStorage.getItem('language')
    let isEnglish = false;

    if (stored === 'true') {
      isEnglish = true;
    } else {
      isEnglish = false;
  }


  this.isEnglishSubject = new BehaviorSubject<boolean>(isEnglish); 
  this.isEnglish$ = this.isEnglishSubject.asObservable();
  }




  toggleLanguage() {
    let newValue = !this.isEnglishSubject.value;
    this.isEnglishSubject.next(newValue);
    localStorage.setItem('language', String(newValue));
  }
}
