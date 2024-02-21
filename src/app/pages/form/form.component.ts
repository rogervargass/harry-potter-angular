import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HogwartsFormComponent } from '../../components/hogwarts-form/hogwarts-form.component';
import { RegistrationHogwartsForm } from '../../types/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, HogwartsFormComponent, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  name = '';
  birthDate = '';
  house = '';
  years = 0;

  getFormValues(form: RegistrationHogwartsForm) {
    this.name = form.name;
    this.birthDate = this.formatDate(form.birthDate);
    this.house = this.getHouse(form.house);
    const [year] = form.birthDate.split('-');
    const currentYear = new Date().getFullYear();

    this.years = currentYear - parseInt(year);
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
