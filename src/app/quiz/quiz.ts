import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Question, QuestionType } from '../question/question';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, Question],
  templateUrl: './quiz.html',
  styleUrl: './quiz.css'
})
export class Quiz {
  @ViewChild('questionRef') questionComponent!: Question;

  myQuestion: QuestionType = {
    text: 'Який декоратор використовується для передачі даних ВНИЗ (Parent -> Child)?',
    options: ['@Output', '@Input', '@ViewChild', '@Inject'],
    correctAnswer: '@Input'
  };

  statusMessage: string = 'Оберіть варіант...';

  onAnswerReceived(answer: string) {
    this.statusMessage = `Ви обрали: ${answer}`;
  }

  checkAnswer() {
    this.questionComponent.showAnswer();
    this.statusMessage = 'Перевірку завершено!';
  }
}