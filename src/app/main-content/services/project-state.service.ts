import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectStateService {
  private projectState = new BehaviorSubject<boolean>(true);
  projectState$ = this.projectState.asObservable();

  setProjectState(isJoinOpen: boolean) {
    this.projectState.next(isJoinOpen);
  }
}
