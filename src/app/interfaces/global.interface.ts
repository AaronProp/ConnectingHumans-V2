export interface AuthResp {
    usuario?:string;
    token?:string;
    estatus?:string;
    msg?:string;
}

export interface Usuario{
    nombre: string;
}

export interface Sesion{
    error?:string,
    msg?:string,
    idSesion?:number,
    idUsuario?:number,
    usuario?:string,
    clave?:string,
    idCatPermisos?:number,
    nombre?:string,
    descripcion?:string
}