import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProfilerCardComponent} from "./common-ui/profiler-card/profiler-card.component";
import { CommonModule } from '@angular/common';
import {ProfileService} from "./data/services/profile.service";
import {Profile} from "./data/interfaces/profile.interfaces";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProfilerCardComponent, NgIf, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  profileService = inject(ProfileService)
  profiles: Profile[] = []

  constructor() {
    this.profileService.getTestAccounts()
      .subscribe(val =>{
        console.log(val); // Вывод данных в консоль
        this.profiles = val
      })
  }
}
