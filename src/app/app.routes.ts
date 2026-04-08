import { Routes } from '@angular/router';
import { Missionlist } from './missionlist/missionlist';
import { Missiondetails } from './missiondetails/missiondetails';

export const routes: Routes = [
  { path: '', component: Missionlist },
  { path: 'mission/:id', component: Missiondetails }
];