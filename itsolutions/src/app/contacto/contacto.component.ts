import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent implements OnInit {


  formContacto = new FormGroup({
  nombre: new FormControl('', [Validators.required, Validators.minLength(5)]),
  email: new FormControl('', [Validators.required, Validators.email]),
  telefono: new FormControl(
    '',
    Validators.compose([
      Validators.required,
      Validators.pattern(/^[0-9]*$/),
      Validators.minLength(10),
      Validators.maxLength(10),
    ])),
  mensaje: new FormControl('', [Validators.required, Validators.minLength(10)])
  });
  
  constructor() {}


  ngOnInit(): void {

  }
  
  get nombre(){
    return this.formContacto.get('nombre') as FormControl;
  }

  get email(){
    return this.formContacto.get('email') as FormControl;
  }

  get telefono(){
    return this.formContacto.get('telefono') as FormControl ; 
  }

  get mensaje(){
    return this.formContacto.get('mensaje') as FormControl ;
  }

  
  abrirWhatsApp() {
    window.open('http://wa.me/+542615958789', '_blank');
  }

}


