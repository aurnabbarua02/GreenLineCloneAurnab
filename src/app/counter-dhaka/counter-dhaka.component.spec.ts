import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterDhakaComponent } from './counter-dhaka.component';

describe('CounterDhakaComponent', () => {
  let component: CounterDhakaComponent;
  let fixture: ComponentFixture<CounterDhakaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterDhakaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterDhakaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
