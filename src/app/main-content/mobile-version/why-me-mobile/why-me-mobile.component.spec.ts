import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyMeMobileComponent } from './why-me-mobile.component';

describe('WhyMeMobileComponent', () => {
  let component: WhyMeMobileComponent;
  let fixture: ComponentFixture<WhyMeMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyMeMobileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhyMeMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
