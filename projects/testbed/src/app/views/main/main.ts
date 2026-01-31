import { Component, computed, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SettingsMenu } from '../../interfaces/yd-user-dropdown-menu.interfaces';
import { NavMenu } from '../../interfaces/yd-navbar.interfaces';

import { YdNavbar } from '../../components/yd-navbar/yd-navbar';


@Component({
  selector: 'app-main',
  imports: [
    YdNavbar,
    RouterOutlet,
],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export default class Main {
  public companyLogo = signal<string>('../../../assets/logo.svg')
  
  public navMenu = computed<NavMenu[]>(() => [
    {
      label:'Home',
      route:'home',
      icon:'home',
    },
    {
      label:'About',
      route:'',
      icon:'angle-double-up',
    },
    {
      label:'Services',
      route:'',
      icon:'server',
    },
  ]);

  public settingsMenu = computed<SettingsMenu[]>( ()=> [
    {
      icon:'user',
      label:'Profile',
      route:'profile',
    },
    {
      icon:'cog',
      label:'Settings',
      route:'settings',
    },
  ]);

  public signOut():void {
    console.log('User Logou');
  };



}
