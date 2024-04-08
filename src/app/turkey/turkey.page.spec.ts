import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TurkeyPage } from './turkey.page';

describe('TurkeyPage', () => {
  let component: TurkeyPage;
  let fixture: ComponentFixture<TurkeyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TurkeyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
