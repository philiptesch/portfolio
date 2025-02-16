import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackTeamPartnerMobileComponent } from './feedback-team-partner-mobile.component';

describe('FeedbackTeamPartnerMobileComponent', () => {
  let component: FeedbackTeamPartnerMobileComponent;
  let fixture: ComponentFixture<FeedbackTeamPartnerMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedbackTeamPartnerMobileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeedbackTeamPartnerMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
