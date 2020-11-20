import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'ngx-alerts';
import { Router } from '@angular/router';
import { PersonService } from 'src/app/services/person.service';
import { Person } from 'src/app/model/person';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  person: Person = new Person();
  content = '';
  constructor(
    private authService: AuthService,
    private router: Router,
    private alertService: AlertService,
    private personService: PersonService
  ) {}

  ngOnInit() {
    console.log("loader header");
    this.personService.getPerson(1).subscribe(
      (person) => {
        this.person = person;
      },
      (err) => {
        this.content = JSON.parse(err.error).messsage;
      }
    );
  }

  logout() {
    this.alertService.info('Checking User Info');
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
