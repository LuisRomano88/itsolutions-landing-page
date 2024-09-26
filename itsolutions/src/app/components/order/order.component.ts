import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/model/product.model';
import { CartService } from 'src/app/services/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  cart: Product[] = [];
  totalPrice: number = 0;
  total = this.cartService.totalCart();
  currentDate: Date = new Date();

  formPedido = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    telefono: new FormControl(
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern(/^[0-9]*$/),
        Validators.minLength(10),
        Validators.maxLength(10),
      ])
    ),
    direccion: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
  });

  constructor(private cartService: CartService, private http: HttpClient) {}

  ngOnInit() {
    this.cartService.getCart().subscribe((cart: Product[]) => {
      this.cart = cart;
    });
  }

  onSubmit(): void {
    if (this.formPedido.valid) {
      // Convierte los datos del formulario a un formato que pueda ser enviado por HTTP POST
      const formData = new FormData();
      formData.append('nombre', this.nombre.value);
      formData.append('email', this.email.value);
      formData.append('telefono', this.telefono.value);
      formData.append('direccion', this.direccion.value);

      // Generar el número de orden
      const orderId = this.generateOrderId();
      // Agrega el número de orden al formulario
      formData.append('orderId', orderId);  


      // Filtrar los datos que deseas enviar
      const filteredCart = this.cart.map((product) => ({
        id: product.id,
        name: product.title,
        quantity: product.quantity,
      }));

      // Convertir a JSON
      const cartJson = JSON.stringify(filteredCart);

      // Crear un campo input oculto para el JSON
      const hiddenField = document.createElement('input');
      hiddenField.type = 'hidden';
      hiddenField.name = 'cart'; // El nombre que tendrá el campo en el correo
      hiddenField.value = cartJson;

      // Agregar el campo al formulario
      formData.append('cart', hiddenField.value);

      // Realiza el envío del formulario
      this.http
        .post(
          'https://formsubmit.co/ajax/itsolutionmendoza@gmail.com',
          formData
        )
        .subscribe({
          next: (response) => {
            Swal.fire(
              '¡Recibimos tu pedido!',
              'En Breve nos ponemos en contacto para finalizar el pago y la entrega de tus productos',
              'success'
            );
            this.formPedido.reset(); //limpia el formulario
            console.log('Formulario enviado', response);
          },
          error: (error) => {
            console.error('Error en el envío del formulario', error);
            Swal.fire(
              'Ocurrio un error',
              'Por favor vuelve a intentarlo',
              'error'
            );
          },
        });
    }
  }

  get nombre() {
    return this.formPedido.get('nombre') as FormControl;
  }

  get email() {
    return this.formPedido.get('email') as FormControl;
  }

  get telefono() {
    return this.formPedido.get('telefono') as FormControl;
  }

  get direccion() {
    return this.formPedido.get('direccion') as FormControl;
  }

}
