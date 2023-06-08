import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-elemento-add',
  templateUrl: './elemento-add.component.html',
  styleUrls: ['./elemento-add.component.css']
})


export class ElementoAddComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  palabras: string[] = ["Tarea1 ","Tarea2 "];
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

}
