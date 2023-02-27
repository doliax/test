import { Component, OnInit } from '@angular/core';
import { Articles } from '../class/articles';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  

  public articulo: Articles = new Articles();
   articulo2: Articles = new Articles();
   articulo3: Articles = new Articles();
   articulo4: Articles = new Articles();


  array_articulos: Articles[] = [];

  constructor(){
    //Defino los valores de cada objeto
    this.articulo.nombre = "Pizza";
    this.articulo.precio = 5;
    this.articulo.foto="https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-chorizo-jamon-y-queso-1080x671.jpg";
    this.array_articulos.push(this.articulo);
    //Articulo 2
    this.articulo2.nombre = "Hamburguesa";
    this.articulo2.precio = 4;
    this.articulo2.foto="https://www.recetasnestle.com.ec/sites/default/files/srh_recipes/4e4293857c03d819e4ae51de1e86d66a.jpg";
    //Articulo 3
    this.articulo3.nombre = "Hot Dog";
    this.articulo3.precio = 2;
    this.articulo3.foto="https://upload.wikimedia.org/wikipedia/commons/b/b1/Hot_dog_with_mustard.png";
    //Articulo 4
    this.articulo4.nombre = "Helado";
    this.articulo4.precio = 1;
    this.articulo4.foto="https://upload.wikimedia.org/wikipedia/commons/3/31/Ice_Cream_dessert_02.jpg";
    //Add Articles objetcs to array
    this.array_articulos.push(this.articulo2);
    this.array_articulos.push(this.articulo3);
    this.array_articulos.push(this.articulo4);
    
    
  }


  ngOnInit(): void {}

  
  
}
