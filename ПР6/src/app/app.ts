import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLogicService } from './app-logic';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="padding: 20px; font-family: sans-serif;">
      <h1>Service Hierarchy</h1>
      <button (click)="handleDataRequest()">Get Data & Log</button>
      
      <ul style="margin-top: 20px;">
        <li *ngFor="let item of items">{{ item }}</li>
      </ul>
    </div>
  `,
})
export class AppComponent {
  items: string[] = [];

  constructor(private appLogicService: AppLogicService) {}

  handleDataRequest() {
    this.items = this.appLogicService.getDataAndLog();
  }
}