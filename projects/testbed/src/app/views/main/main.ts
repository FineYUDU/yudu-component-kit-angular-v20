import { Component, inject, signal,} from '@angular/core';
import { YdHeader } from "../../components/yd-header/yd-header";

@Component({
  selector: 'app-main',
  imports: [
    YdHeader
],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {
}
