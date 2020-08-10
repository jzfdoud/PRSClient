import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.class';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  pageTitle:string = "New User";
  user: User = new User();

  constructor(
    private router: Router,
    private usersvc: UserService
  ) { }

  save():void{
    this.usersvc.create(this.user).subscribe(
      res=>{
        console.log("User create successful")
        this.router.navigateByUrl("/user/list")
      },
      err => {
        console.error(err);
      }
    );
  }
  ngOnInit(): void {
  }

}
