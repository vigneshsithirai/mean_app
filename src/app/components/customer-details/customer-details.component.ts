import { Component, OnInit } from '@angular/core';
import { CustomerDetailsService } from './../../services/customer-details.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  public customerDetails: object;
  constructor(public customerDetailsService: CustomerDetailsService) { }

  ngOnInit() {
    this.getCustamerDetails();
  }

  getCustamerDetails() {
    this.customerDetailsService.getDetails().subscribe(data => {
      if (data && data['customers']) {
        this.customerDetails = data['customers'];
      }
    }, (error) => {
      console.error('Error:', error);
    });
  }

}
