import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  title = 'Bem-vindo ao Mundo Mágico de Harry Potter!';
  img = {
    src: '../../assets/images/hogwarts1.jpg',
    alt: 'castelo de Hogwarts',
  };
  description =
    'O universo de Harry Potter é um lugar mágico e cheio de aventuras, criado \
pela autora J.K. Rowling. A história segue as aventuras de Harry Potter, \
um jovem bruxo que descobre sua verdadeira identidade aos onze anos de \
idade, ao receber uma carta de aceitação para a Escola de Magia e Bruxaria \
de Hogwarts. Ao longo de sete livros, acompanhamos Harry e seus amigos \
Hermione Granger e Ron Weasley, enquanto enfrentam desafios, lutam contra \
as forças das trevas e descobrem segredos sobre o mundo bruxo.';

  ngOnInit() {}
}
