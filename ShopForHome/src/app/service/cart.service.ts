import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any=[]
  public wishList : any=[]
  public productList = new BehaviorSubject<any>([]);
  public productWishList = new BehaviorSubject<any>([]);

  constructor() { }

  getProduct(){
    return this.productList.asObservable();
  }

  getWishlist(){
    return this.productWishList.asObservable();
  }

  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);

  }

  addtoCart(product : any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList)
    this.getTotalPrice();
    console.log(this.cartItemList)
  }

  addToWishlist(product : any){
    this.wishList.push(product);
    this.productWishList.next(this.wishList)
    console.log("wishlsit",this.wishList)
  }

  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any) =>{
      grandTotal += +a.total;
    })
    return grandTotal;
  }

  // removeCartItem(product: any){
  //   this.cartItemList.map((a:any, index:any)=>{
  //     if(product.id== a.id){
  //       this.cartItemList.splice(index,1);
  //     }
  //   })

  //   this.productList.next(this.cartItemList);
  // }

  
  // new code
  removeCartItem(product: any){
    this.cartItemList.splice(product,1);
this.productList.next(this.cartItemList);
}
  // code end



  // removeWishListItem(product: any){
  //   this.wishList.map((a:any, index:any)=>{
  //     if(product.id== a.id){
  //       this.wishList.splice(index,1);
  //     }
  //   })

  //   this.productWishList.next(this.wishList);
  // }


  // new code WishList 
  removeWishListItem(product: any){
    this.wishList.splice(product,1);
this.productList.next(this.cartItemList);
  }
  // end code


  
  removeAllWishlist(){
    this.wishList = []
    this.productWishList.next(this.wishList);
  }


  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }

}
