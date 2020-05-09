import { Component, OnInit } from '@angular/core';
import { employee } from "../Models/employee";
import { CallApiService } from '../call-api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.page.html',
  styleUrls: ['./employee-add.page.scss'],
})
export class EmployeeAddPage implements OnInit {

  data: FormGroup;
  datatest:employee;
  getid:any;
  getid2:any;


  constructor(public callApi: CallApiService, public fb: FormBuilder,public activated: ActivatedRoute) {
    this.data = this.fb.group({
      'empId': "",
      'empFullName': "",
      'empTel': "",
      'empAddress': "",
      'empEmail': "",
      'empSex': "",
      'empAge': "",
      'empPicture': "",
      'empLevel': "",
      'empPosition': "",
      'empSalary': "",
      'empBankName': "",
      'empBankNumber': "",
      'empStartDate': ""

    });

    this.getid = activated.snapshot.paramMap.get('status');
    console.log(this.getid);

     
    this.getid2 = activated.snapshot.paramMap.get('id');
    console.log(this.getid2);

    this.callApi.GetDataEmployeeById(this.getid2).subscribe(it =>{
      console.log(it);
      this.data.patchValue(it);
    })
    


  }

  ngOnInit() {
  }

  adddataemployee() {
    this.datatest = this.data.value;
    this.callApi.AddDataEmployee(this.datatest).subscribe(it => {
      console.log(it);

    })
  }

  editData() {
    this.datatest = this.data.value;
    this.callApi.EditDataEmployee(this.getid2,this.datatest).subscribe(it => {
      console.log(it);

    })
  }

}
