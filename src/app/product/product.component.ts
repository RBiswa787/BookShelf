import { Component,Input,EventEmitter,Output } from '@angular/core';

interface product{
  id: number,
  title: string,
  author: string,
  price: number,
  image: string
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input()
  product : product = {
    'id': 1,
    'title': "",
    "author": "",
    "price": 100,
    "image": ""
  }
  @Output()
  public myOutput = new EventEmitter<product>();
  @Output()
   public priceEmit = new EventEmitter<number>();
    
  public addToCart() {
        this.myOutput.emit(this.product); 
        console.log(this.product);
    }

  public changePrice(price: number){
      this.priceEmit.emit(price);
     }
}
