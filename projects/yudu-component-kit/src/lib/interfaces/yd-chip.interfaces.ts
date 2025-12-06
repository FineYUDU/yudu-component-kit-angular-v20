import { YdIconName } from "./yd-icon-types";

export interface Chip {
    label:string;
    value:string;
    icon?:YdIconName;
    route?:string;
    size?:YdChipSize;
}

export type YdChipSize = 
    'small' | 
    'normal' | 
    'large'
;