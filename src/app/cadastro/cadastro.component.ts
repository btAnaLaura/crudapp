import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  clientes = {
    nome: '',
    cad_pessoa:'',
    cpfcnpj:'',
    estado:'',
    cidade:'',
    bairro:'',
    numero:'',
    complemento:'',
    cep:'',
    rua:'',
    telefone:'',
    status:'',
    datanascimento:'',
    datacadastro:''
  }
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }
  adicionar(){
    const data = {
      nome: this.clientes.nome,
      cad_pessoa: this.clientes.cad_pessoa,
      cpfcnpj: this.clientes.cpfcnpj,
      estado: this.clientes.estado,
      bairro: this.clientes.bairro,
      cep: this.clientes.cep,
      cidade: this.clientes.cidade,
      telefone: this.clientes.telefone,
      datanascimento: this.clientes.datanascimento,
      complemento: this.clientes.complemento,
      rua: this.clientes.rua,
      numero: this.clientes.numero,
      status: this.clientes.status,
      datacadastro: Date.now()
    }
    this.apiService.create(data)
      .subscribe(
        response => {
          console.log(response);
          alert('Registro inserido com sucesso');
        },
        error => {
          alert('Erro na inserção' + data);
          console.log(error);
        });
  }
 
}
