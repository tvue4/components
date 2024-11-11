import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeDeliveryComponent } from './fee-delivery.component';

describe('FeeDeliveryComponent', () => {
  let component: FeeDeliveryComponent;
  let fixture: ComponentFixture<FeeDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeeDeliveryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeeDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
