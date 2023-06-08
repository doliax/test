import { Component } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  show_all = true;
  show_faq = true;
  show_contacto = true;
  show_elemento = true;
   

   toogle(){
    this.show_all = !this.show_all;
   }

   toogleFaq(){
    this.show_faq = !this.show_faq;
   }

   toogleContacto(){
    this.show_contacto = !this.show_contacto;
  }
  toogleElemento(){
    this.show_elemento = !this.show_elemento;
  }
}
getUser();
//Install Axios library for use http calls
async function getUser() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}