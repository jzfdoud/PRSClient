import { Component, OnInit } from '@angular/core';
import { Requestline } from '../requestline.class';
import { Request } from 'src/app/request/request.class';
import { Product } from 'src/app/product/product.class';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestlineService } from '../requestline.service';
import { RequestService } from 'src/app/request/request.service';
import { ProductService } from 'src/app/product/product.service';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';

@Component({
  selector: 'app-requestline-create',
  templateUrl: './requestline-create.component.html',
  styleUrls: ['./requestline-create.component.css']
})
export class RequestlineCreateComponent implements OnInit {

  pageTitle:string="Add New Item to Request #";
  requestline: Requestline= new Requestline();
  requests: Request[]=[];
  products: Product[]=[];
  vendors: Vendor[]=[];
  requestId: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private rlinesvc: RequestlineService,
    private requestsvc: RequestService,
    private productsvc: ProductService,
    private vendorsvc: VendorService
  ) { }

  save(): void {
    this.requestline.requestId=+this.requestId;
    this.requestline.productId= +this.requestline.productId;
    this.rlinesvc.create(this.requestline).subscribe(
      res=>{
        console.log("Requestline create successful");
        this.router.navigateByUrl(`/request/lines/${this.requestline.requestId}`);
      },
      err=>{
        console.error(err);
      }
    );
  }

  ngOnInit(): void {
    this.requestId=this.route.snapshot.params.id;
    this.requestsvc.list().subscribe(
      res=>{
        this.requests = res as Request[];
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
    this.vendorsvc.list().subscribe(
      res=>{
        this.vendors = res as Vendor[];
      },
      err=>{
        console.error(err);
      }
    );
  
  }

}
