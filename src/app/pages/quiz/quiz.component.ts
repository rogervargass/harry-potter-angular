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

  startGame() {
    this.question = this.questions[0].question;
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