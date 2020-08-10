import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor.class';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {

  pageTitle: string= "Edit Vendor";
  vendor: Vendor=null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private vendorsvc: VendorService
  ) { }

  save():void {
    this.vendorsvc.change(this.vendor).subscribe(
      res=> {
        console.log("Vendor edit successful");
        this.router.navigateByUrl("/vendor/list");
      },
      err=>{
        console.error(err);
      }
    );
  }
  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.vendorsvc.get(+id).subscribe(
      res=> {
        console.log("Vendor", res);
        this.vendor = res as Vendor;
      },
      err => {
        console.error(err);
      }
    );
  }

}
