import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { VendorService } from 'src/app/vendor/vendor.service';
import { Vendor } from 'src/app/vendor/vendor.class';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  pageTitle:string="Edit Product";
  product: Product=null;
  vendors: Vendor[]=[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsvc: ProductService,
    private vendorsvc: VendorService
  ) { }

  save():void {
    this.product.vendorId = +this.product.vendorId;
    this.productsvc.change(this.product).subscribe(
      res=> {
        console.log("Product edit successful");
        this.router.navigateByUrl("/product/list");
      },
      err => {
        console.error(err);
      }
    );
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.productsvc.get(+id).subscribe(
      res=> {
        console.log("Product",res);
        this.product = res as Product;
      },
      err=> {
        console.error(err);
      }
    );

    this.vendorsvc.list().subscribe(
      res=>{
        this.vendors = res as Vendor[];
      },
      err=>{
        console.error(err)
      }
    );
  }

}
