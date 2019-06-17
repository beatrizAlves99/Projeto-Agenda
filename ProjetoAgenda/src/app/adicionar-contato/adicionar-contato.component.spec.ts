import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarContatoComponent } from './adicionar-contato.component';

describe('AdicionarContatoComponent', () => {
  let component: AdicionarContatoComponent;
  let fixture: ComponentFixture<AdicionarContatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarContatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
