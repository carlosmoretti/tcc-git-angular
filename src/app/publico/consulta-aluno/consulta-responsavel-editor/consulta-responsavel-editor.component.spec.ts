import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaResponsavelEditorComponent } from './consulta-responsavel-editor.component';

describe('ConsultaResponsavelEditorComponent', () => {
  let component: ConsultaResponsavelEditorComponent;
  let fixture: ComponentFixture<ConsultaResponsavelEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaResponsavelEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaResponsavelEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
