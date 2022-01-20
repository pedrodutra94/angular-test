import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherCounterComponent } from './another-counter.component';

describe('AnothetCounterComponent', () => {
  let component: AnotherCounterComponent;
  let fixture: ComponentFixture<AnotherCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnotherCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
