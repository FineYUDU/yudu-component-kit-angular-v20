import { YdIconName } from "yudu-component-kit";

export interface YdNavbarMenu {
  navMenu:NavMenu[];
  company:CompanyInfo;
  searchPlaceholder?:string,
  username?:string,
  fullName?:string,
  profileImg?:string,
  profileMenu?:NavMenu[];
  themeMenu?:DropdownMenu[];
  langMenu?:DropdownMenu[];
}
export interface NavMenu {
  label:string;
  value?:string;
  icon:YdIconName;
  route:string;
}
export interface CompanyInfo {
  logoImg:string;
  logoRoute?:string;
}

export interface DropdownMenu {
  value:string;
  label:string;
  icon:YdIconName;
  route?:string;
  subMenu?:SubMenu[];
};
export interface SubMenu {
  value:string;
  label:string;
  icon?:YdIconName;
  route?:string;
  selected?:boolean;
  function?:()=> void;
};

export interface SidebarMenu {
  navMenu:NavMenu[];
}

