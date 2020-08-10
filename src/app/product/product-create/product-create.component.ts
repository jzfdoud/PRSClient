import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class';
import { Vendor } from 'src/app/vendor/vendor.class';
import { Router, ActivatedRoute } from '@angular/router';
import { VendorService } from 'src/app/vendor/vendor.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  pageTitle:string="New Product";
  product: Product= new Product();
  vendors: Vendor[]=[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private vendorsvc: VendorService,
    private productsvc: ProductService
  ) { }

  save(): void {
    this.product.vendorId = +this.product.vendorId;
    this.productsvc.create(this.product).subscribe(
      res=> {
        console.log("Product create successful");
        this.router.navigateByUrl("/product/list");
      },
      err=> {
        console.error(err);
      }
    );
  }

  ngOnInit(): void {
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
