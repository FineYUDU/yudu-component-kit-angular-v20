import { YdIconName } from "./yd-icon-types";
export interface SubMenu {
  value:string;
  label:string;
  icon?:YdIconName;
  route?:string;
  selected?:boolean;
  function?:()=> void;
};
export interface DropdownMenu {
  value:string;
  label:string;
  icon:YdIconName;
  route?:string;
  subMenu?:SubMenu[];
};