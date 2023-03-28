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

   palabras: string[] = ["Tarea1","Tarea2"];
   nuevo: string = "";

   addTodo(todos: string) {
    console.log(todos)
    if(!todos){
      alert("El texto esta vacio, escribe uno nuevo")
    }else{
      this.palabras.push(todos);
      this.nuevo = "";
      console.log(this.palabras);
    }
   }

   toogle(){
    this.show_all = !this.show_all;
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