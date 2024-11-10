import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PMainConductorPage } from './p-main-conductor.page';

describe('PMainConductorPage', () => {
  let component: PMainConductorPage;
  let fixture: ComponentFixture<PMainConductorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PMainConductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
