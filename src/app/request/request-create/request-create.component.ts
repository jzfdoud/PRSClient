import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class';
import { User } from 'src/app/user/user.class';
import { Router } from '@angular/router';
import { RequestService } from '../request.service';
import { UserService } from 'src/app/user/user.service';
import { SystemService } from 'src/app/core/system/system.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  pageTitle:string="New Request";
  request:Request= new Request();
  users: User[]=[];
  username:string='';

  constructor(
    private router: Router,
    private requestsvc: RequestService,
    private usersvc: UserService,
    private syssvc: SystemService
  ) { }

  save(): void {
    // this.request.userId = +this.syssvc.loggedInUser.id;
    this.requestsvc.create(this.request).subscribe(
      res=> {
        console.log("Request create successful");
        this.router.navigateByUrl("/request/list");
      },
      err=> {
        console.error(err);
      }
    );
  }

  ngOnInit(): void {
    this.usersvc.list().subscribe(
      res=>{
        this.users = res as User[];
      },
      err=>{
        console.error(err);
      }
    );

    this.request.status= 'NEW';
    this.request.deliveryMode="PICKUP";
    this.request.userId=+this.syssvc.loggedInUser.id;
    this.username=this.syssvc.loggedInUser.userName;

  }

}
