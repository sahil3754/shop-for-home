import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public product : any = [];
  public grandTotal !: number;

  constructor(private cartService: CartService,
    private router: Router ) { }

  ngOnInit(): void {
    this.cartService.getProduct()
    .subscribe(res=>{
      this.product=res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  // removeItem(item: any){
  //   this.cartService.removeCartItem(item);
  // }

// new code
removeItem(item: number){
  this.cartService.removeCartItem(item);
}
// code end 
  emptycart(){
    this.cartService.removeAllCart();
  }

  increaseQuantity(item: any){
    item.quantity++;
    
  }

  decreaseQuantity(item: any){
    if(item.quantity != 0)
      item.quantity--;
  }

  goCheck(){
    this.router.navigate(['/checkout']);
  }

}
