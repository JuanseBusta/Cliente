import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Solicitud } from 'src/app/models/solicitud';
import { SolicitudService } from 'src/app/services/solicitud.service';

@Component({
  selector: 'app-crear-solicitud',
  templateUrl: './crear-solicitud.component.html',
  styleUrls: ['./crear-solicitud.component.css']
})
export class CrearSolicitudComponent {
  solicitudForm:FormGroup;
  titulo = 'Crear solicitud';
  id: string | null;
  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _solicitudService: SolicitudService,
              private aRouter: ActivatedRoute){
    this.solicitudForm = this.fb.group({
      nombre:['', Validators.required],
      correo:['', Validators.required],
      telefono:['', Validators.required],
      tema:['', Validators.required],
      detalle:['', Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void{
    this.esEditar();
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

    if (this.id !== null) {
      //editamos producto
      
      this._solicitudService.editarSolicitud(this.id, SOLICITUD).subscribe(data=>{
        this.toastr.info('La solicitud fue actualizada con éxito', 'Solicitud actualizada!');
        this.router.navigate(['/']);
      } , error =>{
        console.log(error);
        this.solicitudForm.reset();
      })
    } else{
      //Agregamos producto
      console.log(SOLICITUD);
    this._solicitudService.guardarSolicitud(SOLICITUD).subscribe(data =>{
      this.toastr.success('La solicitud fue registrada con éxito', 'Solicitud registrada!');
      this.router.navigate(['/']);
    }, error =>{
      console.log(error);
      this.solicitudForm.reset();
    })
    }
    
  }
  esEditar(){

    if(this.id !== null){
      this.titulo = 'Editar solicitud';
      this._solicitudService.obtenerSolicitud(this.id).subscribe(data=>{
        this.solicitudForm.setValue({
          nombre:data.nombre,
          correo:data.correo,
          telefono:data.telefono,
          tema:data.tema,
          detalle:data.detalle
        })
      })
    }
  }
}
