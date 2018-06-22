import { Component } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './user.html',
})
export class UserComponent {
  user:any = {}
  constructor(private _router: Router){}
  login(){
    this._router.navigate(['/dashboard/'+this.user.email+this.user.password]);
  }

}