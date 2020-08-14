import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user/user.class';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../request.service';
import { UserService } from 'src/app/user/user.service';
import { Request } from '../request.class';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {

  pageTitle:string="Edit Request";
  request: Request=null;
  users: User[]=[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private requestsvc: RequestService,
    private usersvc: UserService
  ) { }

  save():void {
    this.request.userId= +this.request.userId;
    this.requestsvc.change(this.request).subscribe(
      res=> {
        console.log("Request edit successful");
        this.router.navigateByUrl("/request/list");
      },
      err=>{
        console.error(err);
      }
    );
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.requestsvc.get(+id).subscribe(
      res=>{
        console.log("Request", res);
        this.request = res as Request;
      },
      err=>{
        console.error(err);
      }
    );

    this.usersvc.list().subscribe(
      res => {
        this.users = res as User[];
      },
      err=>{
        console.error(err);
      }
    );

  }

}
