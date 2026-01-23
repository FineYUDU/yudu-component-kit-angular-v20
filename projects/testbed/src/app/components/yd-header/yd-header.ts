import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';

import { YdIcon, YdIconName, YdInput, YdButton } from 'yudu-component-kit';
import { RouterLink } from "@angular/router";

export interface NavMenu {
  label:string;
  icon:YdIconName;
  router:string;
}


@Component({
  selector: 'yd-header',
  imports: [
    NgOptimizedImage,
    YdIcon,
    RouterLink,
    YdInput,
    YdButton
],
  templateUrl: './yd-header.html',
  host: {
    'class':'yd-header__container',
  }
})
export class YdHeader {
  public navMenu = input<NavMenu[]>([
    {
      label:'Home',
      icon:'home',
      router:'home',
    },
    {
      label:'features',
      icon:'star',
      router:'features',
    },
    {
      label:'projects',
      icon:'search',
      router:'projects',
    },
  ]);
  public companyLogo = input<string>('../../../assets/logo.svg');
  public profileImg = input<string>('../../../assets/profile-pic.jpg');
  public routerLogo = input<string>('./');
  public hasNotifications = input<boolean>(false);

}
