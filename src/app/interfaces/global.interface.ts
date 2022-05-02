export interface AuthResp {
    id?:string;
    usuario?:string;
    sesion?:string;
    idCliente?:string|null;
    idCandidato?:string|null;
    idLaboratorio?:string|null;
    idUsuarioSistema?:string|null;
    permiso?:string;
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

export interface Candidato{
        idUsuario: number,
        idCandidato: number,
        idCliente: number,
        idLaboratorio: null,
        idUsuarioSistema: number,
        fechaNacimiento: string,
        lugarNacimiento: string,
        genero: string,
        estadoCivil: string,
        edad: number,
        gradoMaxEstudios: string,
        nombre: string,
        apellidoPaterno: string,
        apellidoMaterno: string,
        telefono: string,
        telefonoAlternativo: string,
        correo: string,
        calle: string,
        numInterior: number,
        numExterior: number,
        calleCruza1: string,
        calleCruza2: string,
        estado: string,
        municipio: string,
        cp: string,
        estatus: number,
        tieneHistorialAcademico: number,
        idAntecedentesSociales: number,
        idReferenciasPersonales: null,
        tieneAntecedentesLaborales: number,
        idInvestigacionLegal: number,
        tieneTrabajosNoMencionados: number
}

export interface Cliente{
        idUsuario: number,
        idCliente: number,
        nombreEmpresa : string,
        nombre_paquete: string,
        descripcion_paquete: string,
        precio_paquete: number,
        nombre: string,
        apellidoPaterno: string,
        apellidoMaterno: string,
        telefono: string,
        telefonoAlternativo: string,
        correo: string,
        calle: string,
        numInterior: number,
        numExterior: number,
        calleCruza1: string,
        calleCruza2: string,
        estado: string,
        municipio: string,
        cp: string,
        estatus: number
}

export interface Laboratorio{
        idUsuario: number,
        idLaboratorio: number,
        nombreEmpresa: string,
        cedula: string,
        firma: string,
        encabezado: string,
        pieDePagina: string,
        nombre: string,
        apellidoPaterno: string,
        apellidoMaterno: string,
        telefono: string,
        telefonoAlternativo: string,
        correo: string,
        calle: string,
        numInterior: number,
        numExterior: number,
        calleCruza1: string,
        calleCruza2: string,
        estado: string,
        municipio: string,
        cp: string,
        estatus: number
}

export interface UsuarioSistema{
        idUsuario: number,
        idCliente: number
        idCandidato: number,
        idLaboratorio: number,
        idUsuarioSistema: number,
        idPermiso: number,
        nombre_permiso: string,
        descripcion: string,
        nombre: string,
        apellidoPaterno: string,
        apellidoMaterno: string,
        telefono: string,
        telefonoAlternativo: string,
        correo: string,
        calle: string,
        numInterior: number,
        numExterior: number,
        calleCruza1: string,
        calleCruza2: string,
        estado: string,
        municipio: string,
        cp: number,
        estatus: number
}


// Cats

export interface CatGenero{
    idCatGenero: number,
    descripcion: string
}

export interface CatEstadoCivil{
    idCatEstadoCivil: number,
    descripcion: string
}

export interface CatEscolaridad{
    idCatEscolaridad: number,
    descripcion: string
}

export interface CatPaquete{
    idPaquete: number,
    nombre: string,
    descripcion: string,
    precio: number
}

export interface catPermisos{
    idCatPermisos: number,
    nombre: string,
    descripcion: string
}