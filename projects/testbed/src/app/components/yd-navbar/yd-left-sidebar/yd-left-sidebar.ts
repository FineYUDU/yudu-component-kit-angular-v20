import { Component } from '@angular/core';
// TODO: Remove importation
import { YdIcon } from "yudu-component-kit";

@Component({
  selector: 'yd-left-sidebar',
  imports: [YdIcon],
  templateUrl: './yd-left-sidebar.html',
  host: {
    'class':'yd-left-sidebar__container',
  },
})
export class YdLeftSidebar {

}
