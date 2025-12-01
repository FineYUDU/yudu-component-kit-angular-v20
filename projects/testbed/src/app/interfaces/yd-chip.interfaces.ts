import { YdIconName } from "yudu-component-kit";

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