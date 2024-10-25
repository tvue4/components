import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmwAdditionComponent } from './dmw-addition.component';

describe('DmwAdditionComponent', () => {
  let component: DmwAdditionComponent;
  let fixture: ComponentFixture<DmwAdditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DmwAdditionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DmwAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
