import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CranberryPage } from './cranberry.page';

describe('CranberryPage', () => {
  let component: CranberryPage;
  let fixture: ComponentFixture<CranberryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CranberryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
