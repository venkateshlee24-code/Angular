import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSummary } from './login-summary';

describe('LoginSummary', () => {
  let component: LoginSummary;
  let fixture: ComponentFixture<LoginSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginSummary]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginSummary);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
