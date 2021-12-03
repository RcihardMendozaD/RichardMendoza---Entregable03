import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';


import { from } from 'rxjs';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-form-alumno',
  templateUrl: './form-alumno.component.html',
  styleUrls: ['./form-alumno.component.css']
})
export class FormAlumnoComponent implements OnInit {

  alumnoForm = new FormGroup ({
    nombreCurso: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    apellidos: new FormControl('', Validators.required),
    edad: new FormControl(''),
    correo: new FormControl(''),
    pais: new FormControl(''),
  })
  nombre='';
  apellido='';
  pais=''

  listaAlumnos = [{
    curso:'',
    nombre: '',
    apellido:'',
    edad:'',
    correo: '',
    pais:'',
  }]
  tabla:boolean= false;
  exito:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.validar(),
    this.listaAlumnos.push({
      curso: this.alumnoForm.get("nombreCurso")?.value,
      nombre:(this.alumnoForm.get("nombre")?.value).toUpperCase(),
      apellido:(this.alumnoForm.get("apellidos")?.value).toUpperCase(),
      edad:this.alumnoForm.get("edad")?.value,
      correo:(this.alumnoForm.get("correo")?.value).toUpperCase(),
      pais:(this.alumnoForm.get("pais")?.value).toUpperCase(),

          });

    console.log(this.alumnoForm.get("nombre")?.value);
    this.exito=true;

  }

  listarAlumnos(){
    this.tabla=true;
    this.exito=false;
    
  }

  validar(){
    if(this.alumnoForm.get("edad")?.value==''){
      this.alumnoForm.get("edad")?.setValue('-');
    }
    if(this.alumnoForm.get("correo")?.value==''){
      this.alumnoForm.get("correo")?.setValue('-');
    }
  }
  regresar(){
    this.alumnoForm.get("edad")?.setValue('');
    this.nombre='';
    this.apellido='';
    this.pais='';
    this.tabla=false;
  }
}
