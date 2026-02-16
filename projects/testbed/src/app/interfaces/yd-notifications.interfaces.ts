// TODO: Replaced
import { YdIconName } from "yudu-component-kit";

export interface Notifications {
  icon:YdIconName;
  date:Date;
  title:string;
  message:string;
  route?:string;
}

export interface NotificationsFilter {
  label:string;
  value:string;
}