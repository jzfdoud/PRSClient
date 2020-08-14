import { Request } from '../request/request.class';
import { Product } from '../product/product.class';

export class Requestline {
    id: number=0;
    request: Request;
    requestId:number=0;
    productId:number=0;
    product:Product;
    quantity: number=0;

    
    constructor(){}
}