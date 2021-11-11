import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaResponsavelComponent } from './consulta-responsavel.component';

describe('ConsultaResponsavelComponent', () => {
  let component: ConsultaResponsavelComponent;
  let fixture: ComponentFixture<ConsultaResponsavelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaResponsavelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaResponsavelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
