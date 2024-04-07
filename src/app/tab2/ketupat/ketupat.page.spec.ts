import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KetupatPage } from './ketupat.page';

describe('KetupatPage', () => {
  let component: KetupatPage;
  let fixture: ComponentFixture<KetupatPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(KetupatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
