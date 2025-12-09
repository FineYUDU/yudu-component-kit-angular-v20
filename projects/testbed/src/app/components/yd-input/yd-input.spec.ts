import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YdInput } from './yd-input';

describe('YdInput', () => {
  let component: YdInput;
  let fixture: ComponentFixture<YdInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YdInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YdInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
