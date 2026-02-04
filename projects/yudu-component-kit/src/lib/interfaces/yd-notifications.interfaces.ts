import { YdIconName } from "./yd-icon-types";

export interface Notifications {
  icon:YdIconName;
  date:Date;
  title:string;
  message:string;
  route?:string;
}