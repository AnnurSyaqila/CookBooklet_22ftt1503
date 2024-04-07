import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WajidPage } from './wajid.page';

describe('WajidPage', () => {
  let component: WajidPage;
  let fixture: ComponentFixture<WajidPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WajidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
