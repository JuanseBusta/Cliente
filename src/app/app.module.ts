import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import{HttpClientModule} from '@angular/common/http';
//Componentes
import { AppComponent } from './app.component';
import { CrearSolicitudComponent } from './components/crear-solicitud/crear-solicitud.component';
import { ListarSolicitudesComponent } from './components/listar-solicitudes/listar-solicitudes.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearSolicitudComponent,
    ListarSolicitudesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
