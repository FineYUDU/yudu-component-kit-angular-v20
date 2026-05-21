import { Component, input, output, signal } from '@angular/core';
// TODO: Remove importation
import { NavMenu, YdIcon } from "yudu-component-kit";

import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'yd-left-sidebar',
  imports: [YdIcon, RouterLink, RouterLinkActive],
  templateUrl: './yd-left-sidebar.html',
  host: {
    'class':'yd-left-sidebar',
  },
})
export class YdLeftSidebar {
  public toggleEmmit = output<boolean>();
  
  public isSidebarOpen = input.required<boolean>();
  public sidebarMenu = input<NavMenu[]>();

  public toggleSidebar( toggle:boolean ):void {
    this.toggleEmmit.emit(this.isSidebarOpen());
  }

}
