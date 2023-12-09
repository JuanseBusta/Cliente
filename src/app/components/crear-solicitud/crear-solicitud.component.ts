import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Solicitud } from 'src/app/models/solicitud';

@Component({
  selector: 'app-crear-solicitud',
  templateUrl: './crear-solicitud.component.html',
  styleUrls: ['./crear-solicitud.component.css']
})
export class CrearSolicitudComponent {
  solicitudForm:FormGroup;
  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService){
    this.solicitudForm = this.fb.group({
      nombre:['', Validators.required],
      correo:['', Validators.required],
      telefono:['', Validators.required],
      tema:['', Validators.required],
      detalle:['', Validators.required]
    })
  }
  agregarSolicitud(){
    console.log(this.solicitudForm);
    console.log(this.solicitudForm.get('nombre')?.value);

    const SOLICITUD: Solicitud ={
      nombre: this.solicitudForm.get('nombre')?.value,
      correo: this.solicitudForm.get('correo')?.value,
      telefono: this.solicitudForm.get('telefono')?.value,
      tema: this.solicitudForm.get('tema')?.value,
      detalle: this.solicitudForm.get('detalle')?.value
    }
    console.log(SOLICITUD);
    this.toastr.success('La solicitud fue registrada con éxito', 'Solicitud registrada!');
    this.router.navigate(['/']);
  }
}
