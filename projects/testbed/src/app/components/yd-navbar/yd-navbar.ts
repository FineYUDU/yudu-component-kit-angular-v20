import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

// import { YdIcon } from '../yd-icon/yd-icon';
// import { YdInput } from '../yd-input/yd-input';

// import { NavMenu } from '../../interfaces/yd-navbar.interfaces';

@Component({
  selector: 'yd-navbar',
  imports: [
    RouterLink,
    // YdIcon,
    // YdInput,
  ],
  templateUrl: './yd-navbar.html',
  host: {
    'class':'yd-navbar__container',
  },
})
export class YdNavbar {
  // public navMenu = input.required<NavMenu[]>();
  public companyLogo = input.required<string>();
  public companyLogoRoute = input<string>('');
  public profileImg = input<string>('');

}
