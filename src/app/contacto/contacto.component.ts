import { Component, OnInit } from '@angular/core';
import { DataForm } from '../class/data_form';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
   data_formulario = new DataForm();
  constructor() {
   
   }

  ngOnInit(): void {
  }

  //This function get the form reference in html and reset his values
  onSubmit(form: any){
    form.reset();
  }
}
