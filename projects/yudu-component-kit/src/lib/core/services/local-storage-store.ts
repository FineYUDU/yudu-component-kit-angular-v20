import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageStore {

  constructor(){
    this.initLocalStorageStore();
    this.applyThemeClasses();
  }

  private initLocalStorageStore():void {
    const theme = localStorage.getItem('theme') || 'dark';
    if(!localStorage.getItem('theme')) localStorage.setItem('theme', theme); 
  };

  private applyThemeClasses():void {
    const theme = localStorage.getItem('theme');

    if(theme) {
      document.body.classList.toggle('theme--dark', theme === 'dark');
      document.body.classList.toggle('theme--light', theme === 'light');
    }
  }
  
}
