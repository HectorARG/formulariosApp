import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: [null, [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array( [
      [ 'Metal Gear', Validators.required ],
      [ 'Death Stranding', Validators.required ]
    ], Validators.required)
  });

  nuevoFavorito: FormControl = this.fb.control( '', Validators.required);

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
  }

  campoEsValido(campo: string): boolean {
    return this.miFormulario?.controls?.[campo]?.errors! && this.miFormulario?.controls?.[campo]?.touched!
  }


  get getControls() {
    return (this.miFormulario.get('favoritos') as FormArray).controls;
  }

  agregarFavorito(): void {
    if (this.nuevoFavorito.invalid) { return; }

    this.getControls.push( new FormControl( this.nuevoFavorito.value, Validators.required ));

    this.nuevoFavorito.reset();
  }

  eliminar( index: number ) {
    console.log(index)
    this.getControls.splice(index, 1)
  }

  guardar(): void {
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }
}
