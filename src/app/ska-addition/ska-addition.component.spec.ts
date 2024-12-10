import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkaAdditionComponent } from './ska-addition.component';

describe('SkaAdditionComponent', () => {
  let component: SkaAdditionComponent;
  let fixture: ComponentFixture<SkaAdditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkaAdditionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkaAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
