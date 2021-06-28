import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Clientes } from './models/clientes.model';
const baseUrl = "http://localhost/crud_app/crudapp/ang-php-mysql/api";

@Injectable({
  providedIn: 'root'
})

export class ApiService {
	
	constructor(private httpClient: HttpClient) {}


	read(): Observable<Clientes[]>{
		return this.httpClient.get<Clientes[]>(`${baseUrl}/index.php`);
	}
	readOne(id: any): Observable<any> {
		return this.httpClient.get(`${baseUrl}/index.php?id=${id}`);
	  }
	create(data: any): Observable<any> {
		return this.httpClient.post(`${baseUrl}/create.php`, data);
	}
	 
	update(id:any, data:any) {
		return this.httpClient.put(`${baseUrl}/update.php?id=${id}`, data);
	}
	findByNome(nome: any): Observable<Clientes[]> {
		return this.httpClient.get<Clientes[]>(`${baseUrl}?nome=${nome}`);
	  }
	 
}