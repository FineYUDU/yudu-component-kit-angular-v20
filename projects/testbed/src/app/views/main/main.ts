import { Component, computed, inject, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { DropdownMenu } from '../../interfaces/yd-user-dropdown-menu.interfaces';
import { NavMenu } from '../../interfaces/yd-navbar.interfaces';

import { YdNavbar } from '../../components/yd-navbar/yd-navbar';
import { Notifications, NotificationsFilter } from '../../interfaces/yd-notifications.interfaces';
import { Theme } from 'yudu-component-kit';


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
  public theme = inject( Theme );
  
  public headerMenu = computed<NavMenu[]>(() => [
    {
      label:'route.home',
      value:'home',
      route:'home',
      icon:'home',
    },
    {
      label:'route.about',
      value:'about',
      route:'',
      icon:'angle-double-up',
    },
    {
      label:'route.services',
      value:'services',
      route:'',
      icon:'server',
    },
  ]);

  public userMenu = computed<DropdownMenu[]>( ()=> [
    {
      value:'profile',
      label:'user-menu.profile',
      icon:'user',
      route:'profile',
    },
    {
      value:'settings',
      label:'user-menu.settings',
      icon:'cog',
      route:'settings',
    },
  ]);

  public notifications = signal<Notifications[]>([
    {
      icon:'lightbulb',
      date:new Date(),
      title:'New user',
      message:'Jorge is now available'
    },
    {
      icon:'lightbulb',
      date:new Date(),
      title:'New user',
      message:'Jorge is now available'
    },
    {
      icon:'lightbulb',
      date:new Date(),
      title:'New user',
      message:'Jorge is now available'
    },
    {
      icon:'lightbulb',
      date:new Date(),
      title:'New user',
      message:'Jorge is now available'
    },
  ]);

  public langMenu = computed<DropdownMenu[]>(() => [
    {
      label: 'lang.lang',
      value: 'translate',
      icon: 'language',
      subMenu: [
        {
          value: 'es',
          label: 'lang.es',
          function: () => {
            console.log('Traducir al ES');
          },
        },
        {
          value: 'en',
          label: 'lang.en',
          function: () => {
            console.log('Traducir al EN');
          }
        },
      ],
    },
  ]);

  public themeMenu = computed<DropdownMenu[]>(() => [
    {
      label: 'theme.theme',
      value: 'theme',
      icon: 'palette',
      subMenu: [
        {
          value: 'dark',
          label: 'theme.dark',
          function: () => this.theme.changeTheme('dark'),
        },
        {
          value: 'light',
          label: 'theme.light',
          function: () => this.theme.changeTheme('light'),
        },
      ],
    },
  ]);

  public filtersOptions = signal<NotificationsFilter[]>([
    {
      label:'notifications.filter.all',
      value:'all',
    },
    {
      label:'notifications.filter.week',
      value:'week',
    },
    {
      label:'notifications.filter.earlier',
      value:'earlier',
    },
  ]);
  
  public signOut():void {
    console.log('User Logou');
  };



}
