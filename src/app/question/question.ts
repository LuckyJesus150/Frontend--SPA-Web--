import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface QuestionType {
  text: string;
  options: string[];
  correctAnswer: string;
}

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question.html',
  styleUrl: './question.css'
})
export class Question {
  @Input() question!: QuestionType;
  @Output() answerSelected = new EventEmitter<string>();

  selectedOption: string | null = null;
  isAnswerShown: boolean = false;

  onSelect(option: string) {
    this.selectedOption = option;
    this.answerSelected.emit(option);
    this.isAnswerShown = false;
  }

  showAnswer() {
    this.isAnswerShown = true;
  }
}