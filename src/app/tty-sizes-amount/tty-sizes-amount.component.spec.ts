import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TtySizesAmountComponent } from './tty-sizes-amount.component';

describe('TtySizesAmountComponent', () => {
  let component: TtySizesAmountComponent;
  let fixture: ComponentFixture<TtySizesAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TtySizesAmountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TtySizesAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
