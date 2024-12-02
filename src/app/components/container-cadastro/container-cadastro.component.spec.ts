import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerCadastroComponent } from './container-cadastro.component';

describe('ContainerCadastroComponent', () => {
  let component: ContainerCadastroComponent;
  let fixture: ComponentFixture<ContainerCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerCadastroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
