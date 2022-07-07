import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  regForm: FormGroup | any;
  submitted = false;

  createForm() {
    this.regForm = this.fb.group(
      {
        email: [
          '',
          [
            Validators.required,
            Validators.email,
            Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
          ],
        ],
        password: ['', [Validators.required, Validators.minLength(3)]],
        passwordConfirm: ['', [Validators.required, Validators.minLength(3)]],
        mobile: [
          '',
          [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(10),
            Validators.pattern('^[0-9]+$'),
          ],
        ],
        address: ['', [Validators.required]],
      },
      { validator: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator = (g: FormGroup | any) => {
    g.controls['passwordConfirm'].setErrors(
      g.get('password').value === g.get('passwordConfirm').value
        ? g.controls['passwordConfirm'].errors
        : { notSame: true }
    );
    return g;
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.titleService.setTitle(this.route.snapshot.data['title']);
  }

  submit() {
    if (this.regForm.status.toLowerCase() !== 'valid') {
      this.submitted = true;
      return;
    } else {
      this.submitted = false;
      this.toastr.success('Resgister Sucessfully.', 'Sucessfully', {
        timeOut: 3000,
      });
      this.router.navigate(['/auth']);
    }
  }

  loginUser() {
    this.router.navigate(['/auth']);
  }

  forgotPassword() {
    this.router.navigate(['/auth/forgot-password']);
  }
}
