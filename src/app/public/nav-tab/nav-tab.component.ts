import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CentralDatosService } from 'src/app/central-datos.service';

@Component({
  selector: 'app-nav-tab',
  templateUrl: './nav-tab.component.html',
  styleUrls: ['./nav-tab.component.css']
})
export class NavTabComponent implements OnInit {

  constructor( private router:Router, private servicio:CentralDatosService) { }

  ngOnInit(): void {}

  activoPrincipal = "active"
  activoActivos = "inactive"
  activoInactivos = "inactive"
  activoListado = "inactive"


  irPrincipal(){
  this.activoPrincipal = "active"
  this.activoActivos = "inactive"
  this.activoInactivos = "inactive"
  this.activoListado = "inactive"

  this.servicio.activoPrincipal = "active"
  this.servicio.activoActivos = "inactive"
  this.servicio.activoInactivos = "inactive"
  this.servicio.activoListado = "inactive"
  }

  irActivos(){
    this.activoPrincipal = "inactive"
    this.activoActivos = "active"
    this.activoInactivos = "inactive"
    this.activoListado = "inactive"

    this.servicio.activoPrincipal = "inactive"
    this.servicio.activoActivos = "active"
    this.servicio.activoInactivos = "inactive"
    this.servicio.activoListado = "inactive"
  }

  irInactivos(){
    this.activoPrincipal = "inactive"
    this.activoActivos = "inactive"
    this.activoInactivos = "active"
    this.activoListado = "inactive"

    this.servicio.activoPrincipal = "inactive"
    this.servicio.activoActivos = "inactive"
    this.servicio.activoInactivos = "active"
    this.servicio.activoListado = "inactive"
  }

  irListado(){
    this.activoPrincipal = "inactive"
    this.activoActivos = "inactive"
    this.activoInactivos = "inactive"
    this.activoListado = "active"

    this.servicio.activoPrincipal = "inactive"
    this.servicio.activoActivos = "inactive"
    this.servicio.activoInactivos = "inactive"
    this.servicio.activoListado = "active"
  }

}
