import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
clientes:any;

public id: any
  constructor(private apiService: ApiService, private route: ActivatedRoute , private router: Router) {  
       this.route.params.subscribe(params => this.id = params['id']);
}
 
  listarClientes(): void{
    this.apiService.read()
        .subscribe(
          data => {
            this.clientes = data;
            console.log(data);
          },
          error => {
            console.log(error);
          });
    }
  ngOnInit(): void {
    this.listarClientes();
  }
  inativarCliente(id: any){
    const data = {
      id : id,
      status: this.clientes.status
    }
    this.apiService.update(id, data)
    .subscribe(
      response => {
        console.log(response);
        alert('Registro atualizado com sucesso');
      },
      error => {
        alert('Erro na inserção' + data);
        console.log(error);
      });
    alert('inativado');
  }

   
}
