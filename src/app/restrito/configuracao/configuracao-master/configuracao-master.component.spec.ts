import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracaoMasterComponent } from './configuracao-master.component';

describe('ConfiguracaoMasterComponent', () => {
  let component: ConfiguracaoMasterComponent;
  let fixture: ComponentFixture<ConfiguracaoMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiguracaoMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracaoMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
