import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'ngx-alerts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,private router: Router,
    private alertService: AlertService) { }

  ngOnInit(){
  }

  onSubmit(f: NgForm) {
    this.alertService.info('Checking User Info');
    const loginObserver = {
      next: x => {
        console.log("Go to home");
        this.router.navigate(['home']);
      },
      error: err => {
        console.log(err);
        this.alertService.danger('Unable to Login');
      }
    };
    this.authService.login(f.value).subscribe(loginObserver);
  }

}
