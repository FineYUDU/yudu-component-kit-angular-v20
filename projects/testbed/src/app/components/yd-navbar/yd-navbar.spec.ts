import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YdNavbar } from './yd-navbar';
import { provideZonelessChangeDetection } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

describe('YdNavbar', () => {
  let fixture: ComponentFixture<YdNavbar>;
  let compiled:HTMLElement;
  let component: YdNavbar;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YdNavbar,
        NgOptimizedImage,
        RouterModule.forRoot([{path:'', component:YdNavbar}])
      ],
      providers:[provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YdNavbar);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;

    fixture.componentRef.setInput('navMenu',[]);
    fixture.componentRef.setInput('companyLogo','');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
