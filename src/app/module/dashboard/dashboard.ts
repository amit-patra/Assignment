import { Component } from '@angular/core';
import { userService } from '../../_service/user-service'
@Component({
  selector: 'app-root',
  templateUrl: './dashboard.html',
  providers:[ userService ]
})
export class dashBoardComponent {
  productList:any = [];
  userProduct:any = {id:22};
 constructor(public _userService: userService){
   this.getProductList();
 }
 getProductList(){
  this.productList = this._userService.getProduct()
}
AddProduct(){
this.productList.push(this.userProduct);
}
}