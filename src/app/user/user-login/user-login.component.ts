import { Component, OnInit } from '@angular/core';
import { SystemService } from '../../core/system/system.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  username:string='';
  password:string='';
  msg:string="";

  login():void{
    this.usersvc.login(this.username,this.password).subscribe(
      res=>{
        console.log("User-login successful");
        this.syssvc.loggedInUser=res;
        this.router.navigateByUrl("/request/list");
      },
      err=>{
        console.error(err);
        this.msg="Username/Password is invalid."
      }
    );
  }

  constructor(
    private syssvc: SystemService,
    private usersvc: UserService,
    private router: Router

  ) { }

  ngOnInit(): void {
  }

}
