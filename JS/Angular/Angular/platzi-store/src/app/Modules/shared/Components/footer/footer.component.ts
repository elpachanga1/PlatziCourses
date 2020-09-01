import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  emailInput: FormControl;

  constructor() {
    // esta es la forma en angular de validar un input
    // el primer elemento es un valor por defecto
    // el siguiente es un arreglo de condiciones a validar
    this.emailInput = new FormControl('', [
      Validators.required,
      Validators.email,
      // Validators.minLength(4),
      // Validators.maxLength(20),
      Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)
    ]);

    /*
    // forma en angular de manejar el evento onChange
    this.emailInput.valueChanges.subscribe(value => {
      console.log(value);
    });
    */
  }

  ngOnInit(): void {
  }

  registerMail(): void {
    if (this.emailInput.valid) {
      console.log(this.emailInput.value);
    }
  }

}
