import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YdLeftSidebar } from './yd-left-sidebar';

describe('YdLeftSidebar', () => {
  let component: YdLeftSidebar;
  let fixture: ComponentFixture<YdLeftSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YdLeftSidebar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YdLeftSidebar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
