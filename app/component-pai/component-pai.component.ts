import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-pai',
  templateUrl: './component-pai.component.html',
  styleUrls: ['./component-pai.component.css']
})
export class ComponentPaiComponent  {

sobrenome =" Da silva"

  mostrarNomeCompleto(nomeCompleto: any){
    alert(`O nome completo é: ${nomeCompleto}`);
  }

}
