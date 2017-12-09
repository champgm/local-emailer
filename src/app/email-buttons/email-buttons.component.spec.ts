import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailButtonsComponent } from './email-buttons.component';

describe('EmailButtonsComponent', () => {
  let component: EmailButtonsComponent;
  let fixture: ComponentFixture<EmailButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
