import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YdUserDropdowMenu } from './yd-user-dropdow-menu';

describe('YdUserDropdowMenu', () => {
  let component: YdUserDropdowMenu;
  let fixture: ComponentFixture<YdUserDropdowMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YdUserDropdowMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YdUserDropdowMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
