import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RegistrationHogwartsForm } from '../../types/forms';

@Component({
  selector: 'app-hogwarts-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './hogwarts-form.component.html',
  styleUrl: './hogwarts-form.component.css',
})
export class HogwartsFormComponent {
  registrationForm = new FormGroup({
    name: new FormControl('', Validators.required),
    birthDate: new FormControl('', Validators.required),
    house: new FormControl('', Validators.required),
  });

  @Output() registration = new EventEmitter<RegistrationHogwartsForm>();

  onSubmit() {
    this.registration.emit({
      name: this.registrationForm.value.name || '',
      birthDate: this.registrationForm.value.birthDate || '',
      house: this.registrationForm.value.house || '',
    });
    this.registrationForm.reset();
  }
}
