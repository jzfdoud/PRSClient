import { Component, OnInit } from '@angular/core';
import { Requestline } from '../requestline.class';
import { Product } from 'src/app/product/product.class';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestlineService } from '../requestline.service';
import { ProductService } from 'src/app/product/product.service';

@Component({
  selector: 'app-requestline-edit',
  templateUrl: './requestline-edit.component.html',
  styleUrls: ['./requestline-edit.component.css']
})
export class RequestlineEditComponent implements OnInit {

  pageTitle:string="Edit Requestline";
  requestline: Requestline=null;
  products: Product[]=[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private requestlinesvc: RequestlineService,
    private productsvc: ProductService
  ) { }

  save(): void{
    this.requestline.productId = +this.requestline.productId;
    this.requestlinesvc.change(this.requestline).subscribe(
      res=>{
        console.log("Requestline edit successful", res);
        this.router.navigateByUrl(`/request/lines/${this.requestline.requestId}`);
      },
      err=>{
        console.error(err);
      }
    );

  }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.requestlinesvc.get(+id).subscribe(
      res=>{
        console.log("Requestline", res);
        this.requestline = res as Requestline;
      },
      err=>{
        console.error(err);
      }
    );

    this.productsvc.list().subscribe(
      res=>{
        this.products = res as Product[];
      },
      err=>{
        console.error(err);
      }
    );
  }

}
