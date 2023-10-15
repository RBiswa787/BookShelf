import { Component,Input, Output,EventEmitter } from '@angular/core';

interface product{
  id: number,
  title: string,
  author: string,
  price: number,
  image: string
}

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input()
  product : product = 
    {
      "id": 1,
      'title': "",
      "author": "",
      "price": 100,
      "image": ""
    };
   quantity : number = 1;

   @Output()
   public removeEmit = new EventEmitter<product>();
   @Output()
   public priceEmit = new EventEmitter<number>();
  
   public increment(){
    this.quantity++;
   }

   public decrement(){
    this.quantity--;
    if(this.quantity == 0){
      this.removeItem();
    }
   }

   public removeItem(){
    this.removeEmit.emit(this.product);
   }

   public changePrice(price: number){
    this.priceEmit.emit(price);
   }
}
