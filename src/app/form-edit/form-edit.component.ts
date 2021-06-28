import { ApiService } from './../api.service';
import { Component, OnInit , TemplateRef, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.css']
})
export class FormEditComponent implements OnInit {
  public id: any;
  @ViewChild('editModal')
  editModal!: TemplateRef<any>; 
 
  constructor(private modalService: NgbModal, private apiService: ApiService, private route: ActivatedRoute , private router: Router) {
    this.route.params.subscribe(params => this.id = params['id']);
   }
   clientes = {
     nome: '',
     cad_pessoa:'',
     cpfcnpj: '',
     estado: '',
     bairro: '',
     cep: '',
     cidade: '',
     telefone: '',
     datanascimento: '',
     complemento: '',
     rua: '',
     numero: '',
     status: ''
   }
   abrirModal(){
    this.modalService.open(this.editModal);
  }

   
  listarClientes(): void{
    this.apiService.readOne(this.id)
        .subscribe(
          response => {
            this.clientes = response;
            console.log(this.clientes);
          },
          error => {
            console.log(error);
          });
    }
   ngOnInit(): void {
      this.listarClientes();
    }

    atualizar(){
      const data = {
        id : this.id,
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

      }
      this.apiService.update(this.id, data)
      .subscribe(
        response => {
          console.log(response);
          alert('Registro atualizado com sucesso');
        },
        error => {
          alert('Erro na inserção' + data);
          console.log(error);
        });
  }

}


