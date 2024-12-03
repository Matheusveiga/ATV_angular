import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannercarroselComponent } from './bannercarrosel.component';

describe('BannercarroselComponent', () => {
  let component: BannercarroselComponent;
  let fixture: ComponentFixture<BannercarroselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannercarroselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannercarroselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
