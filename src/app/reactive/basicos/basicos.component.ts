import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit{

  // miFormulario: FormGroup =  new FormGroup({
  //   nombre     : new FormControl('RTX 4080ti'),
  //   precio     : new FormControl(3500),
  //   existencias: new FormControl(35)
  // });

  miFormulario: FormGroup = this.fb.group({
    nombre: [ , [Validators.required, Validators.minLength(3)]],
    precio: [ , [Validators.required, Validators.min(0)]],
    existencias: [ , [Validators.required, Validators.min(0)]],
  })

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
      this.miFormulario.reset({
        nombre: 'RTX 4080ti',
        precio: 28500,
        // existencias: 12
      })
  }

campoEsValido(campo: string): boolean {
  return this.miFormulario?.controls?.[campo]?.errors! && this.miFormulario?.controls?.[campo]?.touched!
}

guardar(): void {

  if(this.miFormulario.invalid){
    this.miFormulario.markAllAsTouched();
    return;
  }

  console.log(this.miFormulario);
  this.miFormulario.reset();

}

}
