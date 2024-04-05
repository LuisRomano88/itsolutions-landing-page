import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

nombre = new FormControl('', [Validators.required, Validators.minLength(5)]);
email = new FormControl('', [Validators.required, Validators.email]);
telefono = new FormControl('', Validators.compose([
  Validators.required,
  Validators.pattern(/^[0-9]*$/),
  Validators.minLength(10),
  Validators.maxLength(10)
]));
mensaje = new FormControl('',Validators.compose([
  Validators.required,
   Validators.minLength(10)
]));

}
