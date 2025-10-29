import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YuduComponentKit } from './yudu-component-kit';

describe('YuduComponentKit', () => {
  let component: YuduComponentKit;
  let fixture: ComponentFixture<YuduComponentKit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YuduComponentKit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YuduComponentKit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
