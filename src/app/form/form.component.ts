import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  registrationForm = new FormGroup({
    name: new FormControl('', Validators.required),
    birthDate: new FormControl('', Validators.required),
    house: new FormControl('', Validators.required),
  });

  name = this.registrationForm.get('name');
  birthDate = this.registrationForm.get('birthDate');
  house = this.registrationForm.get('house');

  onSubmit() {
    alert('Mal feito, feito!');
    this.registrationForm.reset();
  }

  // getHouse() {
  //   switch (this.house?.value) {
  //     case 'gryffindor':
  //       this.house?.setValue('Grifinória');
  //       break;

  //     case 'slytherin':
  //       this.house?.setValue('Sonserina');
  //       break;

  //     case 'ravenclaw':
  //       this.house?.setValue('Corvinal');
  //       break;

  //     case 'hufflepuff':
  //       this.house?.setValue('Lufa-Lufa');
  //       break;

  //     default:
  //       return 'Casa não encontrada!';
  //       break;
  //   }
  // }
}
