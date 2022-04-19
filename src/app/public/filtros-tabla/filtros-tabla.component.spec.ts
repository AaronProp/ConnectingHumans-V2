import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrosTablaComponent } from './filtros-tabla.component';

describe('FiltrosTablaComponent', () => {
  let component: FiltrosTablaComponent;
  let fixture: ComponentFixture<FiltrosTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltrosTablaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrosTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
