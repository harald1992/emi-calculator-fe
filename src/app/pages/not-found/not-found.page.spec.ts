import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundPage } from './not-found.page';

describe('NotFoundPage', () => {
  let page: NotFoundPage;
  let fixture: ComponentFixture<NotFoundPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotFoundPage]
    }).compileComponents();

    fixture = TestBed.createComponent(NotFoundPage);
    page = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(page).toBeTruthy();
  });
});
