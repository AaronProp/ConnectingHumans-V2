import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaCandidatosComponent } from './vista-candidatos.component';

describe('VistaCandidatosComponent', () => {
  let component: VistaCandidatosComponent;
  let fixture: ComponentFixture<VistaCandidatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaCandidatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaCandidatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
