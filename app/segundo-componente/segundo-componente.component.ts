import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent  {

    nome ="arthur asuram";
    dataNascimento ="1995-01-01";
    urlImagem = "/assets/arthur_asuran.jpg";

    mostrarDataNascimento(){
      alert("A data de nascimento do arthur e:" +" ${this.dataNascimento}")
    }

}
