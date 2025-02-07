import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySkillsMobileComponent } from './my-skills-mobile.component';

describe('MySkillsMobileComponent', () => {
  let component: MySkillsMobileComponent;
  let fixture: ComponentFixture<MySkillsMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MySkillsMobileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MySkillsMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
