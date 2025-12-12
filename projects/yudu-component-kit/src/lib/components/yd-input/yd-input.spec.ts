import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YdInput } from './yd-input';
import { provideZonelessChangeDetection } from '@angular/core';

describe('YdInput', () => {
  let fixture: ComponentFixture<YdInput>;
  let compiled:HTMLElement;
  let component: YdInput;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YdInput],
      providers:[provideZonelessChangeDetection()]
    }).compileComponents();

    fixture = TestBed.createComponent(YdInput);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement as HTMLElement;
    
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize inputs with default values', () => {
    expect(component.autocomplete()).toBeNull();
    expect(component.errorMessage()).toBeNull();
    expect(component.hasError()).toBeFalsy();
    expect(component.icon()).toBeNull();
    expect(component.maxLength()).toBe(50);
    expect(component.placeholder()).toBeNull();
    expect(component.type()).toBe('text');
    expect(component.fullSize()).toBeFalsy();
    expect(component.isDisabled()).toBeFalsy();
  });

  it('should initialize properties with default values', ()=> {
    expect(component.value()).toBe('');
    expect(component.isDisabledState()).toBeFalsy();
  });

  it('should apply host default class yd-input__container',()=> {
    expect(compiled.classList).toContain('yd-input__container');
  });
  
  it('should initialize input with class yd-input__body',()=> {
    const input = compiled.querySelector('input') as HTMLInputElement; 
    expect(input).toBeTruthy();
    expect(input.classList).toContain('yd-input__body');
  });

  it('should transform string inputs for isDiabled/fullSize',()=> {
    fixture.componentRef.setInput('isDisabled','');
    fixture.componentRef.setInput('fullSize','');
      
    expect(component.isDisabled()).toBeTrue();
    expect(component.fullSize()).toBeTrue();
  });

  it('should keep boolean values for inputs isDiabled/fullSize',()=> {
    fixture.componentRef.setInput('isDisabled',true);
    fixture.componentRef.setInput('fullSize',false);
      
    expect(component.isDisabled()).toBeTrue();
    expect(component.fullSize()).toBeFalsy();
  });

  it('should apply host classes based on inputs', () => {
    fixture.componentRef.setInput('fullSize',true);
    fixture.detectChanges();

    const hostClassList = compiled.classList;

    expect(hostClassList).toContain('w--100');
  });

  
});
