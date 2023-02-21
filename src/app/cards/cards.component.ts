import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  cards_elements: number = 5;
  cards_array: number[] = []; 


  ngOnInit(): void {
    for (let i = 0; i < this.cards_elements; i++) {
      this.cards_array.push(i);
      
    }
  }

  
  
}
