import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product = null;
  pageTitle: string = 'Product Detail';
  showDelete: boolean = false;

  verify():void {
    this.showDelete= !this.showDelete;
  }

  delete():void {
    this.productsvc.remove(this.product.id).subscribe(
      res => {
        console.log("Product delete successful");
        this.router.navigateByUrl("/product/list");
      },
      err=>{
        console.error(err);
      }
    );
  }

  constructor(
    private productsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.productsvc.get(+id).subscribe(
      res => {
        console.log("Product", res)
        this.product = res as Product;
      },
      err=>{
        console.error(err);
      }
    );
  }

}
