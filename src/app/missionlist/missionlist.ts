import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Mission } from '../models/mission';
import { SpacexService } from '../services/spacex';
import { Missionfilter } from '../missionfilter/missionfilter';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [CommonModule, RouterModule, Missionfilter],
  templateUrl: './missionlist.html',
  styleUrl: './missionlist.css'
})
export class Missionlist implements OnInit {
  private spacexService = inject(SpacexService);

  missions = signal<Mission[]>([]);
  loading = signal(true);
  error = signal('');

  ngOnInit(): void {
    this.loadAllMissions();
  }

  loadAllMissions(): void {
    this.loading.set(true);
    this.spacexService.getAllMissions().subscribe({
      next: (data) => {
        this.missions.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Failed to load SpaceX missions.');
        this.loading.set(false);
      }
    });
  }

  filterByYear(year: string): void {
    this.loading.set(true);
    this.error.set('');

    if (!year) {
      this.loadAllMissions();
      return;
    }

    this.spacexService.getMissionsByYear(year).subscribe({
      next: (data) => {
        this.missions.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Failed to filter SpaceX missions.');
        this.loading.set(false);
      }
    });
  }
}