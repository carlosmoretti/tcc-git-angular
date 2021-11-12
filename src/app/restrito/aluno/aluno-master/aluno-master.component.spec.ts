import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoMasterComponent } from './aluno-master.component';

describe('AlunoMasterComponent', () => {
  let component: AlunoMasterComponent;
  let fixture: ComponentFixture<AlunoMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlunoMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
