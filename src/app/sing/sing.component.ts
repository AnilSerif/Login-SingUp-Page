import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'sing',
  templateUrl: './sing.component.html',
  styleUrls: ['./sing.component.css']
})
export class SingComponent implements OnInit {
  signupForm!:FormGroup;

  constructor(private formBuilder:FormBuilder,
    private http:HttpClient,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name:[''],
      email:[''],
      password:[''],
      phone:['']
    })
  }

 
  sin(){
    this.http.post<any>("http://localhost:3000/singupUsers",this.signupForm.value)
    .subscribe(res=>{
      alert("Singup Successfull");
      this.signupForm.reset();
      this.router.navigate(['login']);
    },err=>{alert("Something went wrong")})
  }
 


















}
