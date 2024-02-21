import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css',
})
export class QuizComponent {
  question = '';
  questions = [
    {
      question: 'Qual é o nome do melhor amigo de Harry Potter?',
      alternatives: [
        'Neville Longbottom',
        'Ron Weasley',
        'Cedric Diggory',
        'Draco Malfoy',
      ],
      answer: 'Ron Weasley',
    },
    {
      question:
        'Qual é a casa em Hogwarts conhecida por sua astúcia e ambição?',
      alternatives: ['Grifinória', 'Sonserina', 'Corvinal', 'Lufa-Lufa'],
      answer: 'Sonserina',
    },
    {
      question:
        'Qual é a criatura mágica que guarda o banco de Gringotes em Londres?',
      alternatives: ['Hipogrifo', 'Dementadores', 'Elfos Domésticos', 'Dragão'],
      answer: 'Dragão',
    },
  ];
  userAnswers: { answer: string; index: number }[] = [];

  score: number = 0;

  startGame() {
    this.question = this.questions[0].question;
  }

  selectAnswer(answer: string, index: number) {
    const response = {
      answer,
      index,
    };
    this.userAnswers.push(response);
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
