import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import QUESTIONS_JSON from '../../data/questions.json';
import { Question } from '../../types/quiz';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css',
})
export class QuizComponent {
  constructor() {}

  question = '';
  questions: Question[] = [...QUESTIONS_JSON];
  userAnswers: string[] = [];

  score: number = 0;

  startGame() {
    this.question = this.questions[0].question;
  }

  restartGame() {
    this.question = '';
    this.userAnswers = [];
    this.score = 0;
  }

  selectAnswer(answer: string) {
    this.userAnswers.push(answer);
    this.verifyAnswers(this.question, answer);
    this.nextQuestion();
  }

  nextQuestion() {
    const currentIndex = this.questions.findIndex(
      (item) => item.question === this.question
    );
    const nextIndex = currentIndex + 1;
    if (nextIndex < this.questions.length) {
      this.question = this.questions[nextIndex].question;
    }
  }

  backQuestion() {
    const currentIndex = this.questions.findIndex(
      (item) => item.question === this.question
    );
    const backIndex = currentIndex - 1;
    if (backIndex >= 0) {
      this.question = this.questions[backIndex].question;
    }
  }

  verifyAnswers(question: string, userAnswer: string) {
    const currentQuestion = this.questions.find(
      (item) => item.question === question
    );

    if (!currentQuestion) {
      return;
    }

    if (currentQuestion.answer === userAnswer) {
      this.score += 10;
    } else {
      this.score -= 5;
    }
  }

  getAlternatives(question: string) {
    const currentQuestion = this.questions.find(
      (item) => item.question === question
    );
    if (!currentQuestion) {
      return [];
    }
    return currentQuestion.alternatives;
  }
}
