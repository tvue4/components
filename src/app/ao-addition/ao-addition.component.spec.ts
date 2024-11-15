import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AoAdditionComponent } from './ao-addition.component';

describe('AoAdditionComponent', () => {
  let component: AoAdditionComponent;
  let fixture: ComponentFixture<AoAdditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AoAdditionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AoAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
