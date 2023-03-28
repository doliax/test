import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  array_images: string[] = [];
  constructor() { }

  ngOnInit(): void {
    this.array_images = ["https://dkv.es/corporativo/sites/default/files/styles/crop_freeform/public/2022-05/la-industria-alimentaria.jpg.webp?itok=oSfCQDlE",
                         "https://s.libertaddigital.com/2022/10/31/1920/1080/fit/europapress-2169121-empleados-grupo-planta-ensaladas-listas-consumir-thurland-alemania.jpg"];

                         //Function is on automatically
                         this.changeImage();
  }
  
  currentIndex = 0;

  //If this variable is bigger than length array, the value return to 0
changeImage() {
  setInterval(() => {
    this.currentIndex++;
    if (this.currentIndex >= this.array_images.length) {
      this.currentIndex = 0;
    }
  }, 3000);
}

    
}
