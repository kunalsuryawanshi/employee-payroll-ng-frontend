import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee'
@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  private baseUrl = "http://localhost:8080/employeepayrollservice";
  id?: number;

  constructor(private httpClient: HttpClient) { }

  getEmployeesList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseUrl}`);
  }

  addEmployee(employee?: Employee): Observable<Object> {
    // console.log(employee);
    return this.httpClient.post<Object>(`${this.baseUrl}/employee`, employee);
  }

  getId(getId?: number) {
    this.id = getId;
  }

  getEmployeeById(): Observable<Object> {
    return this.httpClient.get<Object>(`${this.baseUrl}/employee/${this.id}`);
  }

  updateEmployeeById(employee?: Employee): Observable<Object> {
    return this.httpClient.put<Object>(`${this.baseUrl}/employee/${this.id}`, employee)
  }

  deleteEmployeeById(id?: number): Observable<Object>{
    return this.httpClient.delete<Object>(`${this.baseUrl}/employee/${id}`)
  }
}
