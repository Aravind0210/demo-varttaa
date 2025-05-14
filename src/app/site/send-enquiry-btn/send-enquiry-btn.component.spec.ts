import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendEnquiryBtnComponent } from './send-enquiry-btn.component';

describe('SendEnquiryBtnComponent', () => {
  let component: SendEnquiryBtnComponent;
  let fixture: ComponentFixture<SendEnquiryBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendEnquiryBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendEnquiryBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
