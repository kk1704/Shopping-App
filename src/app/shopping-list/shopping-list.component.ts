import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  name = 'John Smith'
  addToCart: any = 0
  product = {
    name: 'Iphone 14 plus',
    price: 999,
    color: 'Light Blue',
    discount: 10,
    instock: 1,
    Pimage: '/assets/images/Iphone14plus.jpg'
  }

  getdiscountedprice(){
   return this.product.price - (this.product.price * this.product.discount / 100)
  }

  onNameChange(event: any){
    this.name = event.target.value
  }

  decrementCartValue(){
    if(this.addToCart > 0){
      this.addToCart--
    }
  }

  increamentCartValue(){
    if(this.addToCart < this.product.instock){
      this.addToCart++
    }
  }

}
