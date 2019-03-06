import { Component, OnInit } from '@angular/core';
import { BankapiService } from 'src/app/bank-service/bankapi.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  allCustomers:any
  constructor(private bankapi:BankapiService) { }

  ngOnInit() {
    this.bankapi.getCustomers().subscribe(cust => this.allCustomers = cust)
  }

  addCustomer = function(customer){
    customer.status = true;
    customer.image = "2.jpg";
    this.bankapi.saveCustomer(customer).subscribe((c) => {
      console.log(c);
      this.bankapi.getCustomers().subscribe(cust => this.allCustomers = cust);
    });
  }

  deleteCustomer = function(id){
    console.log("Deleted id: " + id);
    this.bankapi.deleteCustomer(id).subscribe((c) => {
      this.bankapi.getCustomers().subscribe(cust => this.allCustomers = cust);
    })
  }

}
