import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PRutasPage } from './p-rutas.page';

describe('PRutasPage', () => {
  let component: PRutasPage;
  let fixture: ComponentFixture<PRutasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PRutasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
