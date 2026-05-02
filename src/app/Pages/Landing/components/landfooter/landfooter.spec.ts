import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Landfooter } from './landfooter';

describe('Landfooter', () => {
  let component: Landfooter;
  let fixture: ComponentFixture<Landfooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Landfooter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Landfooter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
