import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss'],
})
export class ForgotComponent implements OnInit {
  forgotForm: FormGroup | any;
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private titleService: Title
  ) {}

  createForm() {
    this.forgotForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
    });
  }

  ngOnInit(): void {
    this.createForm();
    this.titleService.setTitle(this.route.snapshot.data['title']);
  }

  submit() {
    if (this.forgotForm.status.toLowerCase() !== 'valid') {
      this.submitted = true;
      return;
    } else {
      this.submitted = false;
      this.toastr.success('Sent Email Sucessfully.', 'Sucessfully', {
        timeOut: 3000,
      });
      this.router.navigate(['/auth']);
    }
  }

  loginUser() {
    this.router.navigate(['/auth']);
  }
}
