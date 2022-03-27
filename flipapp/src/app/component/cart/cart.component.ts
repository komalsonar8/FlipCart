import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public product : any=[];
  public grandtotal!:number;
  constructor(private cartservice:CartService) { }

  ngOnInit(): void {
    this.cartservice.getproducts()
    .subscribe(res=>{
      this.product=res;
      this.grandtotal=this.cartservice.gettotalprice();
    })
  }

  removeitem(item:any){
    this.cartservice.removecarttitem(item);
  }

emptycart(){
  this.cartservice.removeallcart();
}

}
