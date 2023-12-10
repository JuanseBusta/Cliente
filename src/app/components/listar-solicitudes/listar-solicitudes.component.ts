import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Solicitud } from 'src/app/models/solicitud';
import { SolicitudService } from 'src/app/services/solicitud.service';

@Component({
  selector: 'app-listar-solicitudes',
  templateUrl: './listar-solicitudes.component.html',
  styleUrls: ['./listar-solicitudes.component.css']
})
export class ListarSolicitudesComponent {

  titulo = 'Listado de solicitudes';

  listSolicitudes: Solicitud[] = [];
  constructor(private _solicitudService: SolicitudService, private toastr: ToastrService){}

  ngOnInit(): void{
    this.obtenerSolicitudes();
  }

  obtenerSolicitudes(){
    this._solicitudService.getSolicitudes().subscribe(data =>{
      console.log(data);
      this.listSolicitudes = data;
    }, error =>{
      console.log(error);
    })
  }

  eliminarSolicitud(id: any){
    this._solicitudService.eliminarSolicitud(id).subscribe(data=>{
      this.toastr.error('La solicitud fue eliminada con éxito','Solicitud eliminada');
      this.obtenerSolicitudes();
    }, error =>{
      console.log(error)
    })
  }
}
