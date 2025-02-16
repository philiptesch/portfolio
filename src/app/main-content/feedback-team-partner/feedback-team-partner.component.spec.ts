import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackTeamPartnerComponent } from './feedback-team-partner.component';

describe('FeedbackTeamPartnerComponent', () => {
  let component: FeedbackTeamPartnerComponent;
  let fixture: ComponentFixture<FeedbackTeamPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedbackTeamPartnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeedbackTeamPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
