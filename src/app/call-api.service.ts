import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { employee } from './Models/employee';


@Injectable({
  providedIn: 'root'
})
export class CallApiService {
  public static host: string = "https://192.168.1.8:5001/api/";

  constructor(public Http: HttpClient) { }


  public GetDataEmployee() {
    return this.Http.get<employee>(CallApiService.host + 'Employee/GetAllEmployee');
  }

  public GetDataEmployeeById(Id: string) {
    return this.Http.get<employee>(CallApiService.host + 'Employee/GetEmployeeById/' + Id);
  }
  public AddDataEmployee(data: employee) {
    return this.Http.post<employee>(CallApiService.host + 'Employee/AddEmployee', data);
  }

  public EditDataEmployee(Id: string, data) {
    return this.Http.put<employee>(CallApiService.host + 'Employee/EditEmployee/' + Id, data);
  }

  public DeleteData(Id: string) {
    return this.Http.delete<employee>(CallApiService.host + '' + Id);
  }
}
