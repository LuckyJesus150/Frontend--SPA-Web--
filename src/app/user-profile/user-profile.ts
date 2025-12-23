import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

// Створюємо Enum для статусів
export enum UserStatus {
  Active = 'Active',
  Inactive = 'Inactive',
  Pending = 'Pending'
}

// Створюємо Інтерфейс для користувача
export interface User {
  id: number;
  name: string;
  status: UserStatus;
  address: {
    city: string;
    street: string;
  };
  hobbies: string[];
}

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule], // Імпортуємо CommonModule для *ngFor
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css'
})
export class UserProfile { // Назва класу коротка
  
  // Створюємо об'єкт із даними
  user: User = {
    id: 101,
    name: 'Олександр Програміст',
    status: UserStatus.Active,
    address: {
      city: 'Київ',
      street: 'вул. Хрещатик, 1'
    },
    hobbies: ['Angular', 'TypeScript', 'Велоспорт', 'Фотографія']
  };

  // Метод для підрахунку хобі
  getHobbiesCount(): number {
    return this.user.hobbies.length;
  }
}