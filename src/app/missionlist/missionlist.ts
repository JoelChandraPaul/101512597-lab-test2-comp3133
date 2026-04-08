import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Mission } from '../models/mission';
import { SpacexService } from '../services/spacex';

@Component({
  selector: 'app-missionlist',
  imports: [CommonModule, RouterModule],
  templateUrl: './missionlist.html',
  styleUrl: './missionlist.css'
})
export class Missionlist implements OnInit {
  private spacexService = inject(SpacexService);

  missions = signal<Mission[]>([]);
  loading = signal(true);
  error = signal('');

  ngOnInit(): void {
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
}