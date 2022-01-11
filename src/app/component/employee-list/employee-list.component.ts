import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeServiceService } from 'src/app/service/employee-service.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[]=[];

  constructor(private employeeService: EmployeeServiceService,
              private router: Router) { }

  ngOnInit(): void {
    this.getEmployees(); 
  }

  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data=>{
      this.employees=data;
    });
  }

  updateEmployee(id?: number){
    this.employeeService.getId(id);
    this.router.navigate(['update']);
  }

  deleteEmployee(id?: number){
    this.employeeService.deleteEmployeeById(id).subscribe();
    this.router.navigate(['employees-list']);
    window.location.reload();
  }

}
