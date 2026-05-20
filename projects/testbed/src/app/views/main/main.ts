import { Component, computed, inject, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { DropdownMenu } from '../../interfaces/yd-user-dropdown-menu.interfaces';
import { NavMenu } from '../../interfaces/yd-navbar.interfaces';

import { YdNavbar } from '../../components/yd-navbar/yd-navbar';
import { Notifications, NotificationsFilter } from '../../interfaces/yd-notifications.interfaces';

import { Theme } from 'yudu-component-kit';

import { I18nService } from 'yudu-component-kit/i18n';


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
  public theme = inject( Theme );
  public translation = inject( I18nService );

  public companyLogo = signal<string>('../../../assets/logo.svg')
  public profileImg = signal<string>('../../../assets/profile-pic.jpg')

  public hanldeSearchEmit(event:string):void {
    console.log('Emit:', event)
  };
  
  public headerMenu = computed<NavMenu[]>(() => [
    {
      label:this.translation.translate('route.home'),
      value:'home',
      route:'home',
      icon:'home',
    },
    {
      label:this.translation.translate('route.about'),
      value:'about',
      route:'',
      icon:'angle-double-up',
    },
    {
      label:this.translation.translate('route.services'),
      value:'services',
      route:'',
      icon:'server',
    },
  ]);

  public userMenu = computed<DropdownMenu[]>( ()=> [
    {
      value:'profile',
      label:this.translation.translate('user-menu.profile'),
      icon:'user',
      route:'profile',
    },
    {
      value:'settings',
      label:this.translation.translate('user-menu.settings'),
      icon:'cog',
      route:'settings',
    },
  ]);

  public notifications = computed<Notifications[]>(()=>[
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
      label:this.translation.translate('lang.lang'),
      value: 'translate',
      icon: 'language',
      subMenu: [
        {
          value: 'es',
          label:this.translation.translate('lang.es'),
          function: () => {
            this.translation.setLang('es')
          },
        },
        {
          value: 'en',
          label:this.translation.translate('lang.en'),
          function: () => {
            this.translation.setLang('en')
          }
        },
      ],
    },
  ]);

  public themeMenu = computed<DropdownMenu[]>(() => [
    {
      label: this.translation.translate('theme.theme'),
      value: 'theme',
      icon: 'palette',
      subMenu: [
        {
          value: 'dark',
          label: this.translation.translate('theme.dark'),
          function: () => this.theme.changeTheme('dark'),
        },
        {
          value: 'light',
          label: this.translation.translate('theme.light'),
          function: () => this.theme.changeTheme('light'),
        },
      ],
    },
  ]);

  public filtersOptions = computed<NotificationsFilter[]>( () => [
    {
      label:this.translation.translate('notifications.filter.all'),
      value:'all',
    },
    {
      label:this.translation.translate('notifications.filter.week'),
      value:'week',
    },
    {
      label:this.translation.translate('notifications.filter.earlier'),
      value:'earlier',
    },
  ]);
  
  public signOut():void {
    console.log('User Logou');
  };



}
