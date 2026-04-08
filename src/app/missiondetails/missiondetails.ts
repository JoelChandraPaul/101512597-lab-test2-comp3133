import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SpacexService } from '../services/spacex';
import { Mission } from '../models/mission';

@Component({
  selector: 'app-missiondetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './missiondetails.html',
  styleUrl: './missiondetails.css'
})
export class Missiondetails implements OnInit {
  private route = inject(ActivatedRoute);
  private spacexService = inject(SpacexService);

  mission = signal<Mission | null>(null);
  loading = signal(true);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.spacexService.getMissionByFlightNumber(+id).subscribe((data) => {
        this.mission.set(data);
        this.loading.set(false);
      });
    }
  }
}