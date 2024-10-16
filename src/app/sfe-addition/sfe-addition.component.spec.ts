import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfeAdditionComponent } from './sfe-addition.component';

describe('SfeAdditionComponent', () => {
  let component: SfeAdditionComponent;
  let fixture: ComponentFixture<SfeAdditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SfeAdditionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SfeAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
