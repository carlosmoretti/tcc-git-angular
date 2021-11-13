import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacaoMasterComponent } from './notificacao-master.component';

describe('NotificacaoMasterComponent', () => {
  let component: NotificacaoMasterComponent;
  let fixture: ComponentFixture<NotificacaoMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificacaoMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificacaoMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
