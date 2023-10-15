import { Component, Output } from '@angular/core';
import data from '../assets/data.json';

interface product 
  {
    "id" : number,
    "title" : string,
    "author": string,
    "image": string,
    "price": number
  }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'book-shelf';
  products = data['books']
  cart : product[] = [];
  total : number =  0;


  addItem(newItem:product) {
    this.cart.push(newItem);
  }

  removeItem(item: product){
    this.cart.splice(this.cart.indexOf(item),1);
  }

  updatePrice(price: number){
    this.total += price;
  }

  onSearchChange(search: string): void {  
    this.products = data['books'].filter(item => item.title.toLowerCase().includes(search.toLowerCase()) || item.author.toLowerCase().includes(search.toLowerCase()));
  }
}
