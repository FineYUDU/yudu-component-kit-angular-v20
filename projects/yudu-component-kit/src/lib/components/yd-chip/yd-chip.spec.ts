import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YdChip } from './yd-chip';

describe('YdChip', () => {
  let component: YdChip;
  let fixture: ComponentFixture<YdChip>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YdChip]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YdChip);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
