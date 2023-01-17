import { Component, OnInit } from '@angular/core';
import { Celular } from '../types/celular';

@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrls: ['./renderizando-listas.component.css']
})
export class RenderizandoListasComponent  {

  celurares: Celular[]= [
    { id: 1, nome: "celular XL", descricao: "Uma celular grande", esgotado: false},
    { id: 1, nome: "celular Normal",  esgotado: false},
    { id: 1, nome: "celular mini", descricao: "Uma celular pequeno", esgotado: true},
  ]

}
