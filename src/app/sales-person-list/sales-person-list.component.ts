import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css'],
})
export class SalesPersonListComponent implements OnInit {
  // create an array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson('Anup', 'Kumar', 'anup@kaminocode.com', 50000),
    new SalesPerson('John', 'Doe', 'john@kaminocode.com', 40000),
    new SalesPerson('Claire', 'Murphy', 'claire@kaminocode.com', 90000),
    new SalesPerson('Mai', 'Truong', 'mai@kaminocode.com', 60000),
  ];

  constructor() {}

  ngOnInit() {}
}
