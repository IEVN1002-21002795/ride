import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PRegistroConductorPage } from './p-registro-conductor.page';

describe('PRegistroConductorPage', () => {
  let component: PRegistroConductorPage;
  let fixture: ComponentFixture<PRegistroConductorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PRegistroConductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
