import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.class';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  pageTitle: string = "Edit User";
  user: User=null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usersvc: UserService
  ) { }

  save():void {
    this.usersvc.change(this.user).subscribe(
      res=> {
        console.log("User edit successful");
        this.router.navigateByUrl("/user/list");
      },
      err=>{
        console.error(err);
      }
    );
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.usersvc.get(+id).subscribe(
      res=> {
        console.log("User", res);
        this.user = res as User;
      },
      err=>{
        console.error(err);
      }
    )
  }

}
