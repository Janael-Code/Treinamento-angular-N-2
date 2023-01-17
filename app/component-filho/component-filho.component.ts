import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-component-filho',
  templateUrl: './component-filho.component.html',
  styleUrls: ['./component-filho.component.css']
})
export class ComponentFilhoComponent {
 
  @Input() sobrenome = "";

  @Output() mostrarNome = new EventEmitter();

  nome ="";
 
}
