import { YdIconName } from "yudu-component-kit";

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