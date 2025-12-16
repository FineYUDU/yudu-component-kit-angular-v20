import { Component, forwardRef, input, signal, booleanAttribute } from '@angular/core';
import { ControlValueAccessor, ReactiveFormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

import { YdIconName } from 'yudu-component-kit';
import { YdIcon } from "yudu-component-kit";

export type InputType = 'text' | 'email' | 'password' | 'number' | 'date';

@Component({
  selector: 'yd-input',
  imports: [
    ReactiveFormsModule,
    YdIcon
],
  templateUrl: './yd-input.html',
  host:{
    'class':'yd-input__container',
    '[class.w--100]':'fullSize()'
  },
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting: forwardRef(()=> YdInput),
      multi:true,
    }
  ]
})
export class YdInput implements ControlValueAccessor{
  public autocomplete = input<string | null>(null);
  public errorMessage = input<string | null>(null);
  public hasError = input<boolean>(false);
  public icon = input<YdIconName | null>(null);
  public maxLength = input<number>(50);
  public placeholder = input<string | null>(null);
  public type = input<InputType>('text');
  public fullSize = input(false, { transform: booleanAttribute });
  public isDisabled = input(false, { transform: booleanAttribute });

  public value = signal<string>(''); 
  public isDisabledStatie = signal<boolean>(false);

  private _onChangeCb: (value: string | null) => void = () => {};
  private onTouchedCb: () => void = () => {};

  public handleInput(event: Event): void {
    if (this.isDisabledStatie()) return;

    const input = event.target as HTMLInputElement;
    this.value.set(input.value);
    this._onChangeCb(this.value());
  }

  public handleBlur(): void {
    this.onTouchedCb();
  }

  public writeValue(value: string | null): void {
    this.value.set(value || '');
  };

  public registerOnChange(fn: (value: string | null) => void): void {
    this._onChangeCb = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouchedCb = fn;
  }

  public setDisabledState(isDisabledStatie: boolean): void {
    this.isDisabledStatie.set(isDisabledStatie);
  }
}
