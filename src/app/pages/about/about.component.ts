import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Curiosity } from '../../types/curiosities';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  content: Array<Curiosity> = [
    {
      title: 'Cada Salão Comunal das casas possuem um jeito único para entrar',
      description: `Nos filmes só nos foi mostrado como se faz para entrar no Salão Comunal
      da Grifinória, que é só dizer a senha para o quadro da Mulher-Gorda (que
      inclusive Neville vivia esquecendo e tinha que esperar alguém da
      Grifinória aparecer para entrar no salão). Na Sonserina também é usado
      uma senha para entrar, a diferença é que os alunos a murmuram para uma
      parede de pedras nas masmorras. Na Lufa-Lufa, é preciso tocar nos barris
      perto da cozinha de Hogwarts no 'Ritmo de Helga-Lufa-Lufa'. Agora, na
      Corvinal você precisa responder uma charada/enigma para uma porta
      encantada.`,
      img: {
        src: '../../assets/images/about_img_1.gif',
        alt: 'Porta de entrada da sala comunal da Grifinória',
      },
    },
    {
      title:
        'Um livro e pena encantada decidem se você está pronto para ir à Hogwarts',
      description: `Numa torre em Hogwarts, há um livro que nunca foi tocado por mãos
      humanas desde que o castelo foi construído e uma pena com um pote de
      tinta prateado. Eles são conhecidos como o "Livro de Admissão" e a "Pena
      de Aceitação". Toda vez que um bruxo, em qualquer idade, manifesta sua
      magia, a pena tenta escrever seu nome do livro. Há vezes que o livro
      sente que essa pessoa não está pronta, então ele fecha e não deixa a
      pena escrever o nome. Isso ocorreu com Neville Longbottom, mas no fim
      deu tudo certo e ele foi pra Hogwarts!`,
      img: {
        src: '../../assets/images/about_img_2.gif',
        alt: 'um gif de uma pessoa segurando cartas',
      },
    },
    {
      title: 'Pirraça assombra Hogwarts há séculos...',
      description: `Esse personagem ficou de fora da versão final dos filmes, mas ele tocava
      o terror nos corredores de Hogwarts nos alunos e no zelador Filch. Foram
      inúmeras tentativas de se livrar dele. Em uma delas, nos anos 1800,
      tentou-se prender Pirraça num sino, mas ele conseguiu escapar e a escola
      ficou fechada por três dias.`,
      img: {
        src: '../../assets/images/about_img_3.jpg',
        alt: 'foto de um fantasma flutuando com alunos abaixo dele',
      },
    },
  ];
}
