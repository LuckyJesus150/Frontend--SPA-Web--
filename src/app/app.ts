import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// Ваші старі імпорти залишаються тут...
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Sidebar } from './sidebar/sidebar';
import { MainContent } from './main-content/main-content';

// 👇 Новий імпорт
import { UserProfile } from './user-profile/user-profile';

@Component({
  selector: 'app-root',
  standalone: true,
  // 👇 Додали UserProfile сюди
  imports: [RouterOutlet, Header, Footer, Sidebar, MainContent, UserProfile],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'my-app';
}