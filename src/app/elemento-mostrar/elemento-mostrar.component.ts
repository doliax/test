import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-elemento-mostrar',
  templateUrl: './elemento-mostrar.component.html',
  styleUrls: ['./elemento-mostrar.component.css']
})
export class ElementoMostrarComponent implements OnInit {
  //Este datos es cada valor del array de padre | Siempre fuera del onIinit
  @Input()
  datos!: string;
  constructor() { }

  ngOnInit(): void {
  
  }

}
