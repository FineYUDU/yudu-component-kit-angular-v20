import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';
import { RouterModule } from '@angular/router';

import { YdChip } from './yd-chip';

describe('YdChip', () => {
  let fixture: ComponentFixture<YdChip>;
  let compiled:HTMLElement;
  let component: YdChip;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YdChip, 
         RouterModule.forRoot([{path: '', component: YdChip}]
      )
      ],
      providers:[provideZonelessChangeDetection()]
    }).compileComponents();

    fixture = TestBed.createComponent(YdChip);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;

    fixture.componentRef.setInput('label', 'test-1');
    fixture.componentRef.setInput('route', './test');

    fixture.detectChanges();
  });
  
  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
  it('should initialize inputs with default values', ()=> {
    expect(component.icon()).toBe(undefined);
    expect(component.size()).toBe('normal');
    expect(component.route()).toBe('./test');
  });

  it('should apply host default classes', () => {
    expect(compiled.classList).toContain('yd-chip__container');
  });

  it('should initialize chip with class yd-chip__body', ()=> {
    const chip = compiled.querySelector('a') as HTMLAnchorElement;

    expect(chip).toBeTruthy();
    expect(chip.classList).toContain('yd-chip__body');
  });

  it('should apply small to class', ()=> {
    fixture.componentRef.setInput('size', 'small');

    expect(component.size()).toBe('small');
  });

  it('should apply normal to class', ()=> {
    fixture.componentRef.setInput('size', 'normal');

    expect(component.size()).toBe('normal');
  });

  it('should apply large to class', ()=> {
    fixture.componentRef.setInput('size', 'large');

    expect(component.size()).toBe('large');
  });

  it('should apply address-book icon', ()=> {
    fixture.componentRef.setInput('icon','address-book');
    expect(component.icon()).toBe('address-book');
  });

  it('should change route to ./main', ()=> {
    fixture.componentRef.setInput('route','./main');

    expect(component.route()).toBe('./main');
  });
});
