import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';




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
  
  constructor(private http: HttpClient) {}


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

  onSubmit(): void {
    if (this.formContacto.valid) {
      // Convierte los datos del formulario a un formato que pueda ser enviado por HTTP POST
      const formData = new FormData();
      formData.append('nombre', this.nombre.value);
      formData.append('email', this.email.value);
      formData.append('telefono', this.telefono.value);
      formData.append('mensaje', this.mensaje.value);
      //console.log(formData)

      // Realiza el envío del formulario
      this.http.post('https://formsubmit.co/ajax/itsolutionmendoza@gmail.com', formData).subscribe({
        next: response => {
          Swal.fire("¡Mensaje enviado con éxito!", "¡Nos comunicaremos contigo en breve!", "success");
          this.formContacto.reset(); //limpia el formulario
          //console.log('Formulario enviado', response);
        },
        error: error => {
          //console.error('Error en el envío del formulario', error);
          Swal.fire("Ocurrio un error", "Por favor vuelve a intentarlo", "error");
        }
      });
    }
  }

  abrirWhatsApp() {
    window.open('http://wa.me/+542615958789', '_blank');
  }

}


