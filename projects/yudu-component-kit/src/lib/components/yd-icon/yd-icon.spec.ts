import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YdIcon } from './yd-icon';
import { provideZonelessChangeDetection } from '@angular/core';

describe('YdIcon', () => {
  let fixture: ComponentFixture<YdIcon>;
  let component: YdIcon;
  let compiled:HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YdIcon],
      providers:[provideZonelessChangeDetection()]
    }).compileComponents();

    fixture = TestBed.createComponent(YdIcon);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;

    fixture.componentRef.setInput('name', 'check');
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize inputs with default values', ()=> {
    expect(component.color()).toBe('var(--yd-chip-color-primary-text-default)');
    expect(component.name()).toBe('check');
    expect(component.size()).toBe('normal');
  });

});
