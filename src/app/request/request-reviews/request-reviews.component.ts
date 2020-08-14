import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SystemService } from 'src/app/core/system/system.service';
import { RequestService } from '../request.service';
import { Request } from '../request.class';

@Component({
  selector: 'app-request-reviews',
  templateUrl: './request-reviews.component.html',
  styleUrls: ['./request-reviews.component.css']
})
export class RequestReviewsComponent implements OnInit {

  pageTitle:string="Requests in Review";
  requests: Request[];
  request:Request= new Request();
  sortCriteria:string="id";
  sortAsc:boolean=true;
  searchCriteria: string='';

  sort(column:string): void {
    if(column === this.sortCriteria) {
      this.sortAsc= !this.sortAsc;
      return;
    }
    this.sortAsc=true;
    this.sortCriteria=column;
  }


  constructor(
     private syssvc: SystemService,
     private requestsvc: RequestService
  ) { }

  ngOnInit(): void {

    this.request.userId=+this.syssvc.loggedInUser.id;
    this.requestsvc.reviews(this.request.userId).subscribe(
      res=>{
        console.log(res);
        this.requests = res as Request[]
      },
      err=>{
        console.error(err);
      }
    );


  }

}
