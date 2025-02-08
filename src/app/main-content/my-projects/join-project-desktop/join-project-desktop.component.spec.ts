import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinProjectDesktopComponent } from './join-project-desktop.component';

describe('JoinProjectDesktopComponent', () => {
  let component: JoinProjectDesktopComponent;
  let fixture: ComponentFixture<JoinProjectDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoinProjectDesktopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JoinProjectDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
