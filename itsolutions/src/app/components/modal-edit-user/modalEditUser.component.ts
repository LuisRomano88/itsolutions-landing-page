import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modalEditUser',
  templateUrl: './modalEditUser.component.html',
  styleUrls: ['./modalEditUser.component.css']
})
export class ModalEditUserComponent implements OnInit {

  @Input() users: any; // Recibe los datos del usuario desde el componente padre
  @Output() closeModal = new EventEmitter<void>(); // Para cerrar el modal
  @Output() saveUser = new EventEmitter<any>(); // Para guardar el usuario modificado
  @Output() deleteUser = new EventEmitter<void>(); // Para eliminar el usuario


  ngOnInit() {
  }

  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      city: ['', Validators.required],
      street: ['', Validators.required],
      number: ['', Validators.required],
      zipcode: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  ngOnChanges(): void {
    // Carga los datos del usuario en el formulario
    if (this.users) {
      this.userForm.patchValue(this.users);
    }
  }

  onSave() {
    if (this.userForm.valid) {
      this.saveUser.emit(this.userForm.value); // Emite el formulario actualizado
    }
  }

  onDelete() {
    this.deleteUser.emit(); // Emite el evento de eliminar usuario
  }

  onClose() {
    this.closeModal.emit(); // Cierra el modal
  }

}
