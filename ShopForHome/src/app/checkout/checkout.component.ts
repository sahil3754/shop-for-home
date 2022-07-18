import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { CartService } from '../service/cart.service';
import { CoupenService } from '../service/coupen.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cartItemList : any =[];
  totalPrice: any = undefined;
  validCoupens: any;
  applied: boolean = false;
  finalPrice:any=0;
  submited: boolean =false;

  constructor(private cartService: CartService,
    private coupenService: CoupenService,
    private router: Router) { }

  ngOnInit(): void {
   this.cartItemList= this.cartService.cartItemList;
    this.totalPrice = this.cartService.getTotalPrice();

    this.getValidCoupens();
  }

  getValidCoupens(){
    let validlist: Array<any> = [];
    
    this.cartItemList.forEach((e:any) => {
      validlist.push(e.name);
    });
    
    console.log(validlist, 'vlist');
   
    this.validCoupens = this.coupenService.validCoupens(validlist);
    console.log(this.validCoupens);

  }

  applyCoupen(){
     let totalDiscount = 0;

    this.validCoupens.forEach((e:any)=>{
      totalDiscount += e.discount;
    });
    this.finalPrice = (this.totalPrice - (this.totalPrice * (totalDiscount/100))).toFixed(0);
    this.applied = true;

  }

  submit(){
    this.submited = true;
    console.log('sub');
    window.alert("Order has successfully submited.");
    this.router.navigate(['/home']);
  }

}
