import { Component, OnInit } from '@angular/core';
import { Menu } from "./menu.class"
import { SystemService } from '../core/system/system.service';
import { User } from '../user/user.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  user:User=null;
  firstname:string='';
  lastname:string='';

  menus: Menu[]=[
    new Menu("Home", "/core/home"),
    new Menu("About", "/core/about"),
    new Menu("User", "/user/list"),
    new Menu("Vendor", "/vendor/list"),
    new Menu("Product", "/product/list"),
    new Menu("Request", "/request/list"),
    new Menu("Review", "/request/reviews"),
    new Menu("Login", "/user/login")
    
  ];
  constructor(
    private syssvc: SystemService
  ) { }

  ngOnInit(): void {
    // this.user.id = this.syssvc.loggedInUser.id;
    if(this.syssvc.loggedInUser !=null) {
      this.firstname = this.syssvc.loggedInUser.firstName;
      this.lastname = this.syssvc.loggedInUser.lastName;
    }
  }

}
