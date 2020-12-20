import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomersService } from '../../services/customers.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';
import {Customer} from '../../models/customer.model';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: Observable<Customer[]>;

  constructor(private customersService: CustomersService, private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.customers = this.customersService.getCustomers();
  }

  logout() {
    this.authService.logout()
      .subscribe(success => {
        if (success) {
          this.router.navigate(['/login']);
        }
      });
  }

}
