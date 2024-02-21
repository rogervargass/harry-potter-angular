import { Component, Input } from '@angular/core';
import { GalleryImage } from '../../types/images';

@Component({
  selector: 'app-image-card',
  standalone: true,
  imports: [],
  templateUrl: './image-card.component.html',
  styleUrl: './image-card.component.css',
})
export class ImageCardComponent {
  @Input() photo: GalleryImage = {
    src: '',
    description: '',
    alt: '',
  };
}
