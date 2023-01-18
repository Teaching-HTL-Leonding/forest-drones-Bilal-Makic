import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DroneOperationsComponent } from './drone-operations.component';

describe('DroneOperationsComponent', () => {
  let component: DroneOperationsComponent;
  let fixture: ComponentFixture<DroneOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DroneOperationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DroneOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
