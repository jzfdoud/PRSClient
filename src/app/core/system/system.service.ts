import { Injectable } from '@angular/core';
import { User } from 'src/app/user/user.class';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  loggedInUser:User=null;

  constructor() { }
}
