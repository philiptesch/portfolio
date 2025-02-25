import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private isEnglishSubject = new BehaviorSubject<boolean>(false);
  isEnglish$ = this.isEnglishSubject.asObservable();

  toggleLanguage() {
    this.isEnglishSubject.next(!this.isEnglishSubject.value);
  }
}
