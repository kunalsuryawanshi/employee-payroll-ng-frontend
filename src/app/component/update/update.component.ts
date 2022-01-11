import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeServiceService } from 'src/app/service/employee-service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  employee: Employee = new Employee();
  selectedDepartment: any = [];
  employeeForm!: FormGroup;
  todayDate: Date = new Date();

  departments = [
    { "value": "HR" },
    { "value": "Sales" },
    { "value": "Finance" },
    { "value": "Engineer" },
    { "value": "Others" }
  ];

  constructor(private _fb: FormBuilder,
    private employeeService: EmployeeServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.employeeForm = this._fb.group({
      name: ['', Validators.required],
      imagePath: ['', Validators.required],
      gender: ['', Validators.required],
      departments: [this.selectedDepartment],
      salary: ['', Validators.required],
      startDate: ['', Validators.required],
      notes: ['', Validators.required],
    }),
      this.getEmployeeById();
  }

  updateEmployee(id: number) {
    console.log(id, this.employee);
    this.employee = this.employeeForm.value;
    this.employeeService.updateEmployeeById(this.employee).subscribe();
    this.router.navigate(['employees-list'])
    // this.employeeService.getEmployeeById();
  }

  private getEmployeeById() {
    this.employeeService.getEmployeeById().subscribe(data => {
      console.log(data);
    });
  }

  onChange(event: any) {
    let index = this.selectedDepartment.indexOf(event.target.value);
    if (index == -1) {
      this.selectedDepartment.push(event.target.value);
    } else {
      this.selectedDepartment.splice(index, 1);
    }
  }
}
