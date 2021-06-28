import { CadastroComponent } from './cadastro/cadastro.component';
import { ListaComponent } from './lista/lista.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormEditComponent } from './form-edit/form-edit.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:  'lista', component: ListaComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path:'form-edit/:id', component: FormEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule, BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
