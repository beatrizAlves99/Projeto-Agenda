import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaContatosComponent } from './agenda-contatos.component';

describe('AgendaContatosComponent', () => {
  let component: AgendaContatosComponent;
  let fixture: ComponentFixture<AgendaContatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendaContatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaContatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
