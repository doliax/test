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
   palabras: string[] = ["Tarea1","Tarea2"];
   nuevo: string = "";
   addTodo(todos: string) {
    console.log(todos)
    if(!todos){
      alert("El texto esta vacio, escribe uno nuevo")
    }else{
      setTimeout(()=>{
        //Aquí que cambie de color y sonido
       const el = document.getElementById("general");
       if(el){
        el.style.backgroundColor = 'green';
       }
       else{
        console.log('El elemento no existe')
       }

       //Para volvr a su color original
       setTimeout(() => {
        if (el) {
          el.style.backgroundColor = '';
        } else {
          console.log('El elemento no existe');
        }
      }, 1000);

      
      }, 300);
      
      this.palabras.push(todos);
      this.nuevo = "";
      console.log(this.palabras);
    }
   }

   toogle(){
    this.show_all = !this.show_all;
   }

   toogleFaq(){
    this.show_faq = !this.show_faq;
   }

   toogleContacto(){
    this.show_contacto = !this.show_contacto;
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