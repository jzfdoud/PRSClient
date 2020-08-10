import { Pipe, PipeTransform } from '@angular/core';
import { Vendor } from './vendor.class';
import { identifierModuleUrl } from '@angular/compiler';

@Pipe({
  name: 'vendorSearch'
})
export class VendorSearchPipe implements PipeTransform {

  transform(vendors:Vendor[], searchCriteria): Vendor[] {
    if(vendors == null || searchCriteria == null || searchCriteria == '') return vendors;
    let selVendors: Vendor[] = [];
    searchCriteria=searchCriteria.toLowerCase();
    for(let v of vendors) {
      if(
        v.name.toLowerCase().includes(searchCriteria)
        || v.address.toLowerCase().includes(searchCriteria)
        || v.city.toLowerCase().includes(searchCriteria)
        || v.state.toLowerCase().includes(searchCriteria)
        || v.email != null && v.email.toLowerCase().includes(searchCriteria)
        || v.code.toLowerCase().includes(searchCriteria)
        || v.id.toString().includes(searchCriteria)
        || v.zip.toString().includes(searchCriteria)
        || v.phone !=null && v.phone.toString().includes(searchCriteria))
        {selVendors.push(v)}
    }
    return selVendors;
  }

}
