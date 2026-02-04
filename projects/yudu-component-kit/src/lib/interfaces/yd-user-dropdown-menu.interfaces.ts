import { YdIconName } from "./yd-icon-types";

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