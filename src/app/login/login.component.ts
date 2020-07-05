import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  submitted = false;
  error:string='';
  constructor( private router: Router,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['',Validators.required],
      password: ['',Validators.required],
     });
  }

  get f() { return this.loginForm.controls; }

  submit() {
    this.submitted=true;
    if (this.loginForm.valid) {
      if(this.loginForm.value.username=='shrikant' && this.loginForm.value.password=='patil'){
          this.router.navigate(['/gnotes']);
        }else{
          this.error="Invalid user name password";
        }
   }
  }


}
