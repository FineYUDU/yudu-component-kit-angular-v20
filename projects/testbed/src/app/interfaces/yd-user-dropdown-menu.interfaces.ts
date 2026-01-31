import { YdIconName } from "yudu-component-kit";

export interface SubMenu {
  label:string;
  route?:string;
  icon?:YdIconName;
};
export interface SettingsMenu {
  label:string;
  route?:string;
  icon:YdIconName;
  subMenu?:SubMenu[];
};