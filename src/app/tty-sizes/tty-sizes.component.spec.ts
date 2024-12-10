import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TtySizesComponent } from './tty-sizes.component';

describe('TtySizesComponent', () => {
  let component: TtySizesComponent;
  let fixture: ComponentFixture<TtySizesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TtySizesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TtySizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
