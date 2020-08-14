import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class';
import { Requestline } from '../../requestline/requestline.class'
import { ActivatedRoute } from '@angular/router';
import { RequestService } from '../request.service';
import { RequestlineService } from '../../requestline/requestline.service'

@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})
export class RequestLinesComponent implements OnInit {

  pageTitle:string="RequestLine";
  requestId: number=0;
  request: Request=null;
  requestline: Requestline;
  showVerify: boolean=false;
  
  delete():void {this.showVerify = !this.showVerify;}

  verify(id:number):void {
      this.showVerify = false;
      this.rLinesvc.remove(id).subscribe(
        res=>{
          console.log("RequestLine delete successful");
          this.refresh(this.requestId);
        }
      );
    }

  constructor(
    private route: ActivatedRoute,
    private requestsvc: RequestService,
    private rLinesvc: RequestlineService
  ) { }

  refresh(id:number): void {
    this.requestsvc.get(id).subscribe(
      res=>{
        console.log("Request", res);
        this.request = res as Request;
      },
      err=>{
        console.error(err);
      }
    );
  }

  ngOnInit(): void {
    this.requestId = +this.route.snapshot.params.id;
    this.refresh(this.requestId);
  }

}
