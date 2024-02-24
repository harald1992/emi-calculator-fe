import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';

import { AlertComponent } from './alert.component';

describe('AlertComponent', () => {
  let component: AlertComponent;
  let fixture: ComponentFixture<AlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlertComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create with default values', () => {
    expect(component).toBeTruthy();
    expect(component.enableClose).toBeFalse();
  });

  it('should load correct icon source for different alerts', () => {
    component.type = 'error';
    expect(component.iconSrc).toEqual('assets/icons/error-icon.svg');
  });
});
