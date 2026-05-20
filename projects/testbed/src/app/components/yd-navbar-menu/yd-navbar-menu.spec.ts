import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YdNavbarMenu } from './yd-navbar-menu';

describe('YdNavbarMenu', () => {
  let component: YdNavbarMenu;
  let fixture: ComponentFixture<YdNavbarMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YdNavbarMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YdNavbarMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
