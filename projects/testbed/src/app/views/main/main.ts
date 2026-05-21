import { Component, computed, inject, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavMenu, YdNavbarMenu } from '../../interfaces/yd-navbar.interfaces';

import { YdNavbar } from '../../components/yd-navbar/yd-navbar';
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

  public navbarMenu = computed<YdNavbarMenu>(() => {
    const menu:YdNavbarMenu = {
      profileImg:'../../../assets/profile-pic.jpg',
      fullName:'Erick Alcocer',
      username:'FineYudu',
      searchPlaceholder:'Buscar',
      navMenu:[
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
      ],
      company: {
        logoImg:'../../../assets/logo.svg'
      },
      profileMenu:[
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
      ],
      themeMenu:[
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
      ],
      langMenu: [
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
      ]
    }
    return menu;
  }
  );

  public hanldeSearchEmit(event:string):void {
    console.log('Emit:', event)
  };
  
  public handleSignOutEmit():void {
    console.log('User Logou');
  };



}
