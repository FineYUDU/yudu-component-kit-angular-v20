import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YdIcon } from './yd-icon';

describe('YdIcon', () => {
  let component: YdIcon;
  let fixture: ComponentFixture<YdIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YdIcon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YdIcon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
