import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.class';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User = null;
  pageTitle: string = "User Detail";
  showDelete: boolean= false;

  verify():void {
    this.showDelete= !this.showDelete;
  }

  delete():void {
    this.usersvc.remove(this.user.id).subscribe(
      res => {
        console.log("User delete successful");
        this.router.navigateByUrl("/user/list");
      },
      err=>{
        console.error(err);
      }
    );
  }
  constructor(
    private usersvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.usersvc.get(+id).subscribe(
      res => {
        console.log("User", res);
        this.user = res as User;
      },
      err => {
        console.log(err);
      }
    );
  }

}
