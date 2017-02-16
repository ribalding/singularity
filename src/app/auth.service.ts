import { Injectable } from '@angular/core';
import {AngularFire, AuthProviders, AuthMethods} from "angularfire2";
import {Router} from "@angular/router";

@Injectable()
export class AuthService {

  user;
  constructor(private af : AngularFire,
              private router : Router) {
  }

  userIsLoggedIn() : boolean {
    var loggedIn : boolean;
    this.af.auth.subscribe(user => {
      if(user) {
        loggedIn = true;
        return loggedIn;
      } else {
        loggedIn = false;
        return loggedIn;
      }
    });
    return loggedIn;
  }

  login(email : string, password : string){
   this.af.auth.login({
      email: email,
      password: password
    },{
      provider: AuthProviders.Password,
      method: AuthMethods.Password
    });
  }

}
