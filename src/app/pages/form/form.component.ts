import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HogwartsFormComponent } from '../../components/hogwarts-form/hogwarts-form.component';
import { RegistrationHogwartsForm } from '../../types/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, HogwartsFormComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  name = '';
  birthDate = '';
  house = '';

  getFormValues(form: RegistrationHogwartsForm) {
    console.log(form);
    this.name = form.name;
    this.birthDate = form.birthDate;
    this.house = form.house;
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
