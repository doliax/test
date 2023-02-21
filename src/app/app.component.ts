import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';

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
}
