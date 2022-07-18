import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public totalItem : number = 0;
  public totalWishedItem : number = 0;
  constructor(private cartService: CartService, private router: Router,private apiService:ApiService) { }

  ngOnInit(): void {
    this.cartService.getProduct()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
    this.cartService.getWishlist()
    .subscribe(res=>{
      this.totalWishedItem = res.length;
    })
  }

  isLoggedIn(){
    return window.localStorage.getItem("login") === "true";
  }

  logout(){
    if(confirm("Are you sure you want to log out?")){
      window.localStorage.removeItem("login");
      window.localStorage.removeItem("role");
      this.router.navigate(["/home"])
    }
  }

  confirmRole(){
    return window.localStorage.getItem('role')==='USER';
  }
 

  searchItem(itemname:any){
     let productName = (itemname.value).toLowerCase();
     this.apiService.getProduct().subscribe(s=>{
      let bro = s.filter((s:any)=> s.category.toLowerCase().includes(productName) || s.name.toLowerCase().includes(productName))
      this.apiService.Products.next(bro);
     })
  }

}
