import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YdNotifications } from './yd-notifications';

describe('YdNotifications', () => {
  let component: YdNotifications;
  let fixture: ComponentFixture<YdNotifications>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YdNotifications]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YdNotifications);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
