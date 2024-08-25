import {Component, Input} from '@angular/core';
import {Profile} from "../../data/interfaces/profile.interfaces";
import {ImgUrlPipe} from "../../helpers/pipe/img-url.pipe";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-profiler-card',
  standalone: true,
  imports: [
    NgForOf,
    ImgUrlPipe
  ],
  templateUrl: './profiler-card.component.html',
  styleUrl: './profiler-card.component.scss'
})
export class ProfilerCardComponent {
  @Input() profile?: Profile; // Старый способ с декоратором Инпут.
                              // ?- означает, согласие с тем, что возможно он не будет передан.
                              // ! - таже затычка, но в профиль
}
