import { Component, OnInit } from '@angular/core';
import {AngularFire, AuthProviders, AuthMethods} from "angularfire2";
import {Router} from "@angular/router";
declare var $: any;

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private af : AngularFire,
              private router : Router) {
  }


  ngOnInit() {
  }

  adminLogin(){
    var email = $("#adminEmail").val();
    var password = $("#adminPassword").val();
    this.af.auth.login({
      email: email,
      password: password
    },{
      provider: AuthProviders.Password,
      method: AuthMethods.Password
    }).then(user => {
      this.router.navigate([""]);
    });
  }

}
