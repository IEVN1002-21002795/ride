import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PCargaPage } from './p-carga.page';

describe('PCargaPage', () => {
  let component: PCargaPage;
  let fixture: ComponentFixture<PCargaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PCargaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
