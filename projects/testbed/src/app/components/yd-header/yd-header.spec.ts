import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YdHeader } from './yd-header';

describe('YdHeader', () => {
  let component: YdHeader;
  let fixture: ComponentFixture<YdHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YdHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YdHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
