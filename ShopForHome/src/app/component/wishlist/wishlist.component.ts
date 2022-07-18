import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  public product : any = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getWishlist()
    .subscribe(res=>{
      this.product=res;
    })
  }

  // removeItem(item: any){
  //   this.cartService.removeWishListItem(item);
  // }


// new code
removeItem(item: number){
  this.cartService.removeWishListItem(item);
}
// code end



  emptyWishlist(){
    this.cartService.removeAllWishlist();
  }

  emptycart(){
    this.cartService.removeAllCart();
  }

  // goCheck(){
  //   this.router.navigate(['/checkout']);
  // }
}
