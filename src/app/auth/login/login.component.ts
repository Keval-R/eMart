import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';
import { AuthService } from '@app/service/auth/auth.service';
import { ApiService } from '@app/service/api/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  angForm: FormGroup | any;
  submitted = false;

  createForm() {
    this.angForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      password: ['', Validators.required],
    });
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private titleService: Title,
    private authService: AuthService,
    private apiService: ApiService
    
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.route.snapshot.data['title']);
  }

  submit () {
    // console.warn(this.angForm.value);
    if (this.angForm.status.toLowerCase() !== 'valid') {
      this.submitted = true;
      return;
    } 
    
    
    this.apiService.login(this.angForm.value).subscribe((data)=>{
      if(data.status === 200){
        this.submitted = false;
        this.authService.login();
        this.router.navigate(['/home']);
      }else{
        this.toastr.error(data.msg, 'Error', {
          timeOut: 3000,
        });
      }
    }),
    (error:any)=>{
        console.log("error 2", error);
    };
 
  }

  registerUser() {
    this.router.navigate(['/auth/register']);
  }

  forgotPassword() {
    this.router.navigate(['/auth/forgot-password']);
  }
}
