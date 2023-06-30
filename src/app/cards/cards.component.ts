import { Component, OnInit } from '@angular/core';
import { Articles } from '../class/articles';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  number_puls: number = 0;  
  precio: number = 0;
  precios_articulos: number[] = [];
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

  addPuls(){
    this.number_puls++;
  }

  //Esta función acumula el precio de cada artiuclo, se lo asignamos a la imagen
  acumularPrecio(precio_final: number) {
    this.precio += precio_final;
    this.precios_articulos.push(precio_final);
  }

  removePuls(){
    //Comprobamos que haya elementos el el array, aunque siempre habrá por el tema de la comprobación del html
    if (this.precios_articulos.length > 0) {
      //Obtenemos el ultimo precio añadido
      const ultimo_precio = this.precios_articulos[this.precios_articulos.length - 1];
      // Restar el último precio añadido
      this.precio -= ultimo_precio; 
      // Luego lo eliminamos del array
      this.precios_articulos.pop(); 
      this.number_puls--;
    }
  }

  /*decrecerPrecio(precio_final: number) {
    this.precio -= precio_final;
  }*/

  ngOnInit(): void {}

  
  
}
