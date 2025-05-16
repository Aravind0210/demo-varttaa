import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideFormBtnComponent } from './side-form-btn.component';

describe('SideFormBtnComponent', () => {
  let component: SideFormBtnComponent;
  let fixture: ComponentFixture<SideFormBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideFormBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideFormBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
