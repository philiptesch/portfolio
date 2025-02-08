import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElPoloLocoDesktopComponent } from './el-polo-loco-desktop.component';

describe('ElPoloLocoDesktopComponent', () => {
  let component: ElPoloLocoDesktopComponent;
  let fixture: ComponentFixture<ElPoloLocoDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElPoloLocoDesktopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElPoloLocoDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
