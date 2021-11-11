import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaResponsavelDetailComponent } from './consulta-responsavel-detail.component';

describe('ConsultaResponsavelDetailComponent', () => {
  let component: ConsultaResponsavelDetailComponent;
  let fixture: ComponentFixture<ConsultaResponsavelDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaResponsavelDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaResponsavelDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
