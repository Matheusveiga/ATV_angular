import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrocelPropComponent } from './carrocel-prop.component';

describe('CarrocelPropComponent', () => {
  let component: CarrocelPropComponent;
  let fixture: ComponentFixture<CarrocelPropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrocelPropComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrocelPropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
