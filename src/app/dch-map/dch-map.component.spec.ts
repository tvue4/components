import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DchMapComponent } from './dch-map.component';

describe('DchMapComponent', () => {
  let component: DchMapComponent;
  let fixture: ComponentFixture<DchMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DchMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DchMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
