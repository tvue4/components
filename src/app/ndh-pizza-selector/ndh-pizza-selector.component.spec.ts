import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NdhPizzaSelectorComponent } from './ndh-pizza-selector.component';

describe('NdhPizzaSelectorComponent', () => {
  let component: NdhPizzaSelectorComponent;
  let fixture: ComponentFixture<NdhPizzaSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NdhPizzaSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NdhPizzaSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
