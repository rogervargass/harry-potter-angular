import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ImageCardComponent } from '../../components/image-card/image-card.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, ImageCardComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent {
  photos = [
    {
      src: '../../../assets/images/image_gallery_1.webp',
      description: 'Bastidores de Prisioneiro de Azkaban',
      alt: 'Harry, Hermione e Ron em uma floresta de dia com o diretor ao lado filmando',
    },
    {
      src: '../../../assets/images/image_gallery_2.webp',
      description: 'Harry momento Eleven',
      alt: 'Em um tabuleiro de xadrez gigante, Harry está com a mão levantada para frente enquanto o diretor esta ao lado dele',
    },
    {
      src: '../../../assets/images/image_gallery_3.webp',
      description: 'Friends <3',
      alt: 'atores de Voldemort e Dumbledore sentados conversando',
    },
  ];
}
