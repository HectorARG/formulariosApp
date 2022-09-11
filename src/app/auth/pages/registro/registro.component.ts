import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  // TODO: temporalmente

  nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  miFormulario: FormGroup = this.fb.group({
    nombre: [null, [Validators.required, Validators.pattern( this.nombreApellidoPattern )]],
    email: [null, [Validators.required, Validators.pattern( this.emailPattern )]]
  })

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {

    this.miFormulario.reset({
      nombre: 'Hector Roman',
      email: 'test1@test.com'
    })

  }

  campoNoValido( campo: string ): any {
    // this.miFormulario.controls[campo].errors
    return this.miFormulario.get(campo)?.errors && this.miFormulario.get(campo)?.touched
  }

  validar(): void{
    console.log(this.miFormulario.value);

    this.miFormulario.markAllAsTouched();
  }

}
