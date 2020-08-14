import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class';
import { RequestService } from '../request.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/user/user.class';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

  request: Request= null;
  users: User[]=[];
  pageTitle:string='Request Detail';
  showDelete:boolean=false;

  autorev():void {
    this.requestsvc.autorev(this.request).subscribe(
      res=>{
        this.router.navigateByUrl("/request/list");
      },
      err=>{
        console.error(err);
      }
    );
  }
  verify():void {
    this.showDelete= !this.showDelete;
  }

  delete():void {
    this.requestsvc.remove(this.request.id).subscribe(
      res => {
        console.log("Request delete successful");
        this.router.navigateByUrl("/request/list");
      },
      err=>{
        console.error(err);
      }
    );
  }

  constructor(
    private requestsvc: RequestService,
    private router: Router,
    private route: ActivatedRoute,
    private usersvc: UserService
  ) { }

  ngOnInit(): void {
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
