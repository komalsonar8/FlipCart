import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productlist: any;
  constructor(private api : ApiService) { }

  ngOnInit(): void {
    this.api.getproduct()
    .subscribe(res=>{
      this.productlist=res;
    }) 

  }

}
