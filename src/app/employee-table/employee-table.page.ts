import { Component, OnInit } from '@angular/core';
import { employee } from "../Models/employee";
import { CallApiService } from '../call-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.page.html',
  styleUrls: ['./employee-table.page.scss'],
})
export class EmployeeTablePage implements OnInit {

  data1: employee;
  status: any;

  constructor(public callapi: CallApiService, public router: Router) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.callapi.GetDataEmployee().subscribe(it => {
      this.data1 = it;
      console.log(it);
    })
  }

  gotoAddPage() {
    this.status = 1;
    this.router.navigate(['/employee-add', { status: this.status }]);
  }

  gotoDetail(id) {
    this.status = 2;
    this.router.navigate(['employee-add', { id, status: this.status }]);
  }

  gotoEdit(id) {
    this.status = 3;
    this.router.navigate(['employee-add', { id, status: this.status }]);
  }

}
