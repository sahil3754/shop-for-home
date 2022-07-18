import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class CoupenService {

  coupensList: Array<any> = [
    {name: 'Wooden Dining Chair', discount: 20, coupenCode: 'AIP13'},
    {name: 'Alen 6 Seater Fabric Sofa', discount: 30, coupenCode: 'PH300'},
    {name: 'Flora Kids 2 Door Wardrobe', discount: 10, coupenCode: 'TMC10'}
  ];

  constructor(private cartService: CartService) { }

  validCoupens(items: any): Array<any>{
    console.log(items, 'cate name');
  
    return this.coupensList.filter(e => items.includes(e.name) && (e.discount !== 0));
  }
}
