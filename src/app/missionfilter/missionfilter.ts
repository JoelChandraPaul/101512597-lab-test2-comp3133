import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-missionfilter',
  imports: [CommonModule, FormsModule],
  templateUrl: './missionfilter.html',
  styleUrl: './missionfilter.css'
})
export class Missionfilter {
  @Output() yearSelected = new EventEmitter<string>();

  selectedYear = '';

  years: string[] = [
    '2006', '2007', '2008', '2009', '2010',
    '2011', '2012', '2013', '2014', '2015',
    '2016', '2017', '2018', '2019', '2020'
  ];

  onYearChange(): void {
    this.yearSelected.emit(this.selectedYear);
  }
}