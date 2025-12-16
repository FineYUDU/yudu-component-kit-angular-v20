import { Component, inject, signal,} from '@angular/core';

// import { YdInput } from '../../components/yd-input/yd-input';

import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
// import { JsonPipe } from '@angular/common';
// import { YdChip } from "yudu-component-kit";

@Component({
  selector: 'app-main',
  imports: [
    // YdInput,
    // JsonPipe,
    // YdChip
    ReactiveFormsModule,
],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {
  private fb = inject( FormBuilder );

  public hasError = signal<boolean>(false);
  public isSubmited = signal<boolean>(false);


  loginForm = this.fb.group({
    email:['', [Validators.required, Validators.email]],
    firstName:['', [Validators.required, Validators.email]],
    lastName:['', [Validators.required, Validators.email]],
    password:['', [Validators.required, Validators.minLength(6)]],
  });
  
  public onSubmit():void {
    console.log(this.loginForm.value);
  }
}
