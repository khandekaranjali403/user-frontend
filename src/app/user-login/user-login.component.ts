import { Component } from '@angular/core';
import { User } from '../user';
import { LoginuserService } from '../loginuser.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  user:User = new User();

  constructor(private loginuserservice: LoginuserService){

    
    
  }

  userLogin(){
    console.log(this.user);
    // this.loginuserservice.loginUser(this.user).subscribe((_data: any)=>
    //   {
    //     alert("login successfully")
    //   },error=>alert("Sorry Please enter correct username and password"))
  }
}


