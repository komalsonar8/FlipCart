import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList :any=[]
  public productList = new BehaviorSubject<any>([]);

  constructor() { }
  getproducts()
  {
    return this.productList.asObservable();
  }

  setproduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
addtocart(product:any)
{
  this.cartItemList.push(product);
  this.productList.next(this.cartItemList);
  this.gettotalprice();
  console.log(this.cartItemList);
}

gettotalprice(): number
{
  let grandtotal=0;
  this.cartItemList.map((a:any)=>{
    grandtotal += a.total;
  })
  return grandtotal;
}


removecarttitem(product:any)
{
  this.cartItemList.map((a:any,index:any)=>{
    if(product.id===a.id){
      this.cartItemList.splice(index,1);

    }
  })
  this.productList.next(this.cartItemList);
}

removeallcart()
{
  this.cartItemList=[]
  this.productList.next(this.cartItemList);
}


}
