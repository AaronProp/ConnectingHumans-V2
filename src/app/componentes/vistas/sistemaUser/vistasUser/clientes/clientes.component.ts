import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  urlAct = String(location.href)
  verAddCandidato = true;
  verAddCliente = true;
  verAddUsuario = true;
  verAddLab = true;
  constructor() {
    if(this.urlAct == "http://localhost:4200/usuario/clientes"){
      this.verAddCliente = false
    }
  }

  ngOnInit(): void {
  }

}
