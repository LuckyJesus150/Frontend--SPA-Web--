import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  logEvent(event: string) {
    console.log(`[Analytics]: ${event}`);
  }
}