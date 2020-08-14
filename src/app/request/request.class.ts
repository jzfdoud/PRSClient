import { User } from '../user/user.class';
import { Requestline } from '../requestline/requestline.class';

export class Request {
    id:number=0;
    description:string='';
    justification:string='';
    rejectionReason:string='';
    deliveryMode:string='';
    status:string='REVIEW';
    total:number=0;
    userId:number=0;
    user: User;
    usersName:string='';
    requestline: Requestline[];

    constructor(){}
}