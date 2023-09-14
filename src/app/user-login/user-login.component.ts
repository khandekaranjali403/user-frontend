import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { LoginuserService } from '../loginuser.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit{

  constructor(private loginuserService: LoginuserService){ }

  ngOnInit(): void {}  
  
  user:User = new User();
    userclick()
    {
      console.log("save");
    }

  userLogin(){
    console.log(this.user);
    this.loginuserService.loginUser(this.user).subscribe
    (data => 
      {
      alert("User login sucessfully")
     } , error => alert("Please Enter Correct Username and Password"));
  }
}


