import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PRegistroPasajeroPage } from './p-registro-pasajero.page';

describe('PRegistroPasajeroPage', () => {
  let component: PRegistroPasajeroPage;
  let fixture: ComponentFixture<PRegistroPasajeroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PRegistroPasajeroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
