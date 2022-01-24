import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNavTabComponent } from './admin-nav-tab.component';

describe('AdminNavTabComponent', () => {
  let component: AdminNavTabComponent;
  let fixture: ComponentFixture<AdminNavTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNavTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNavTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
