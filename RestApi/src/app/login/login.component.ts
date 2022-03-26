import { Component} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  public email:string ="";
  public password:string= "";
  public error_msg:string= "";
  public  is_loadeing = false;


  constructor(public router:Router, public http:HttpClient) { }

  login(){
    if(this.email.trim() != '' && this.password.trim() !="")
    {
      this.is_loadeing = true;
        this.http.post("http://student-api.treinetic.xyz/api/v1.0/user/login",{
          "email":this.email,
          "password":this.password
        }).subscribe(res =>{
          this.is_loadeing = false;
          this.router.navigate(["/Dash"]);
        },(error => {
          //if any error found then execute this block
          this.is_loadeing = false;
          this.error_msg = "Sorry login error!";
          this.email = "";
          this.password = "";
          this.router.navigate(["/login"]);
        }));
    }
    else
    {
      alert("You need to fill both fields!")
    }

  }

}
