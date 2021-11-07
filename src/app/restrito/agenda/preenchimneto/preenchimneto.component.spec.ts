import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreenchimnetoComponent } from './preenchimneto.component';

describe('PreenchimnetoComponent', () => {
  let component: PreenchimnetoComponent;
  let fixture: ComponentFixture<PreenchimnetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreenchimnetoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreenchimnetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
