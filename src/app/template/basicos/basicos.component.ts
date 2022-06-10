import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent {
  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    producto: '',
    precio: 0,
    existencias: 0,
  };

  nombreValido(): boolean {
    return (
      this.miFormulario?.controls['producto']?.touched &&
      this.miFormulario?.controls['producto']?.invalid
    );
  }

  precioValido(): boolean {
    return (
      this.miFormulario?.controls['precio']?.touched &&
      this.miFormulario?.controls['precio']?.invalid
    );
  }

  guardar() {
    console.log(this.miFormulario);
    this.miFormulario.resetForm(this.initForm);
  }
}
