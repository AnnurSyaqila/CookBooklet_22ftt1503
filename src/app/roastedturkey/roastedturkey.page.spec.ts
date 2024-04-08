import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RoastedturkeyPage } from './roastedturkey.page';

describe('RoastedturkeyPage', () => {
  let component: RoastedturkeyPage;
  let fixture: ComponentFixture<RoastedturkeyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RoastedturkeyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
