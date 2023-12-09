export class Solicitud{
    _id?: number;
    nombre: string;
    correo: string;
    telefono: string;
    tema: string;
    detalle: string;

    constructor(nombre:string, correo: string, telefono: string, categoría: string, detalle: string){
        this.nombre=nombre;
        this.correo=correo;
        this.telefono=telefono;
        this.tema=categoría;
        this.detalle=detalle;
    }
}