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
    this.birthDate = this.formatDate(form.birthDate);
    this.house = this.getHouse(form.house);
  }

  getHouse(house: string) {
    switch (house) {
      case 'gryffindor':
        return 'Grifinória';

      case 'slytherin':
        return 'Sonserina';

      case 'ravenclaw':
        return 'Corvinal';

      case 'hufflepuff':
        return 'Lufa-Lufa';

      default:
        return 'Casa não encontrada!';
    }
  }

  formatDate(date: string) {
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
  }
}
