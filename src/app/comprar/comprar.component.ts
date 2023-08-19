import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit {

  nombre!: string;
  apellidos!: string;
  email!: string;
  dir_env!: string;
  tlf!: number;
  message!: string;

  constructor() { 
  }

  ngOnInit(): void {
   
  }

  comprobar(){
     if (!this.nombre || this.nombre.trim() === '') {
    alert("Debes poner el nombre");
  }
  }



}
