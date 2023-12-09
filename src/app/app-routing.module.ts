import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Componentes
import { ListarSolicitudesComponent } from './components/listar-solicitudes/listar-solicitudes.component';
import { CrearSolicitudComponent } from './components/crear-solicitud/crear-solicitud.component';

const routes: Routes = [
  {path: '',component: ListarSolicitudesComponent},
  {path: 'crear-solicitud', component: CrearSolicitudComponent},
  {path: 'editar-solicitud/:id', component: CrearSolicitudComponent},
  {path: '**', redirectTo:'',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
