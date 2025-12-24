import { Injectable } from '@angular/core';
import { DataService } from './data';
import { AnalyticsService } from './analytics';

@Injectable({
  providedIn: 'root'
})
export class AppLogicService {
  constructor(
    private dataService: DataService,
    private analyticsService: AnalyticsService
  ) {}

  getDataAndLog() {
    const data = this.dataService.getData();
    this.analyticsService.logEvent('Data retrieved successfully via AppLogicService');
    return data;
  }
}