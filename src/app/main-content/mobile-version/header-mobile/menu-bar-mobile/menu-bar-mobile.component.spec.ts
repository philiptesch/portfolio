import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBarMobileComponent } from './menu-bar-mobile.component';

describe('MenuBarMobileComponent', () => {
  let component: MenuBarMobileComponent;
  let fixture: ComponentFixture<MenuBarMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuBarMobileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuBarMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
