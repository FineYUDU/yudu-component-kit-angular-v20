import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';

import { YdInput } from './yd-input';

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

  it('should apply host default class "yd-input__container"',()=> {
    expect(compiled.classList).toContain('yd-input__container');
  });
  
  it('should initialize input with class "yd-input__body"',()=> {
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

  it('should change the input type when the "type" input changes', ()=> {
    fixture.componentRef.setInput('type','password');

    const inputElement = fixture.nativeElement.querySelector('input');

    fixture.detectChanges();

    expect(inputElement.type).toBe('password');
  });

  it('should change hasError to true', ()=> {
    fixture.componentRef.setInput('hasError', true);
    expect(component.hasError()).toBeTruthy();
  });

  it('should change maxLength to 5', ()=> {
    fixture.componentRef.setInput('maxLength', 5);
    expect(component.maxLength()).toBe(5);
  });

  it('should change autocomplete to "login-example"', ()=> {
    fixture.componentRef.setInput('autocomplete','login-example');
    expect(component.autocomplete()).toBe('login-example');
  });
  
  it('should set errorMessage to "error test"', ()=> {
    fixture.componentRef.setInput('errorMessage','error test');
    expect(component.errorMessage()).toBe('error test');
  });

  it('should change icon to "align-center"', ()=> {
    fixture.componentRef.setInput('icon', 'align-center');

    expect(component.icon()).toBe('align-center');
  });

  it('should change placeholder to "placeholder-example"', ()=> {
    fixture.componentRef.setInput('placeholder', 'placeholder-example');

    expect(component.placeholder()).toBe('placeholder-example');
  });

  it('should change fullSize to true', ()=> {
    fixture.componentRef.setInput('fullSize',true);

    expect(component.fullSize()).toBeTruthy();
  });

  it('should change isDisabled to true', ()=> {
    fixture.componentRef.setInput('isDisabled',true);

    expect(component.isDisabled()).toBeTruthy();
  });

  it('should call registered onChange callback on input', () => {
    const onChangeSpy = jasmine.createSpy('onChange');
    component.registerOnChange(onChangeSpy);

    const inputEl = fixture.nativeElement.querySelector('input') as HTMLInputElement;
    inputEl.value = 'hello';
    inputEl.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    expect(component.value()).toBe('hello');
    expect(onChangeSpy).toHaveBeenCalledWith('hello');
  });

  it('should NOT call onChange when disabledState is true', () => {
    const onChangeSpy = jasmine.createSpy('onChange');
    component.registerOnChange(onChangeSpy);

    component.setDisabledState(true);
    fixture.detectChanges();

    const inputEl = fixture.nativeElement.querySelector('input') as HTMLInputElement;
    inputEl.value = 'blocked';
    inputEl.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    expect(component.value()).toBe(''); // no cambió
    expect(onChangeSpy).not.toHaveBeenCalled();
  });

  it('should call registered onTouched callback on blur', () => {
    const onTouchedSpy = jasmine.createSpy('onTouched');
    component.registerOnTouched(onTouchedSpy);

    const inputEl = fixture.nativeElement.querySelector('input') as HTMLInputElement;
    inputEl.dispatchEvent(new Event('blur'));

    expect(onTouchedSpy).toHaveBeenCalled();
  });

  it('should writeValue and update input value', () => {
    component.writeValue('abc');
    fixture.detectChanges();

    const inputEl = fixture.nativeElement.querySelector('input') as HTMLInputElement;
    expect(component.value()).toBe('abc');
    expect(inputEl.value).toBe('abc');
  });

  it('should writeValue(null) as empty string', () => {
    component.writeValue(null);
    fixture.detectChanges();

    const inputEl = fixture.nativeElement.querySelector('input') as HTMLInputElement;
    expect(component.value()).toBe('');
    expect(inputEl.value).toBe('');
  });

  it('should disable the native input when setDisabledState(true)', () => {
    component.setDisabledState(true);
    fixture.detectChanges();

    const inputEl = fixture.nativeElement.querySelector('input') as HTMLInputElement;
    expect(inputEl.disabled).toBeTrue();
  });
  
});
