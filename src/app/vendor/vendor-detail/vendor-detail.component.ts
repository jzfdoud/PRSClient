import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from '../vendor.class';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {

  vendor: Vendor = null;
  pageTitle: string = "Vendor Detail";
  showDelete: boolean= false;

  verify():void {
    this.showDelete= !this.showDelete;
  }

  delete():void {
    this.vendorsvc.remove(this.vendor.id).subscribe(
      res => {
        console.log("Vendor delete successful");
        this.router.navigateByUrl("/vendor/list");
      },
      err=>{
        console.error(err);
      }
    );
  }

  constructor(
    private vendorsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.vendorsvc.get(+id).subscribe(
      res=> {
        console.log("Vendor", res)
        this.vendor = res as Vendor;
      },
      err=>{
        console.error(err);
      }
    );
  }


}
