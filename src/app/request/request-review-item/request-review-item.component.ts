import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../request.service';
import { SystemService } from 'src/app/core/system/system.service';
import { Request } from '../request.class';
import { User } from 'src/app/user/user.class';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-request-review-item',
  templateUrl: './request-review-item.component.html',
  styleUrls: ['./request-review-item.component.css']
})
export class RequestReviewItemComponent implements OnInit {

  pageTitle:string="RequestLine";
  requestId: number=0;
  request: Request=null;
  showVerify: boolean=false;
  usersvc: UserService;
  users: User[]=[];

  approve():void {
    this.requestsvc.approve(this.request).subscribe(
      res=>{
        this.router.navigateByUrl("/request/list");
      },
      err=>{
        console.error(err);
      }
    );
  }

  verify(): void {
    this.showVerify= false;
    this.requestsvc.reject(this.request).subscribe(
      res=>{
        this.router.navigateByUrl("/request/list");
      },
      err=>{
        console.error(err);
      }
    );
  }
  reject():void {
    this.showVerify=!this.showVerify;
  }

  constructor(
    private route: ActivatedRoute,
    private requestsvc:RequestService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.requestId = +this.route.snapshot.params.id;
    let id = this.route.snapshot.params.id;
    this.requestsvc.get(+id).subscribe(
      res=>{
        console.log("Product", res)
        this.request = res as Request;
      },
      err=> {
        console.error(err);
      }
    );

  }

}
