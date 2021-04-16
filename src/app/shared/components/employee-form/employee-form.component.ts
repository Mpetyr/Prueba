import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  employee = null;

  employeeForm: FormGroup;

  private isEmail = /\S+@\S+\.\S+/;

  constructor(private router: Router, private fb:FormBuilder, private listSvc: ListService) { 
    const navigation = this.router.getCurrentNavigation();
    this.employee = navigation?.extras?.state?.employee;
    this.initForm();
  }

  ngOnInit(): void {

    if(typeof this.employee == 'undefined'){

      this.router.navigate(['new']);

    }else{
      this.employeeForm.patchValue(this.employee);
    }
  }

  onSave(){
    if(this.employeeForm.valid){
      const employee = this.employeeForm.value;
      const employeeId = this.employee?.id || null;
      this.listSvc.onSaveEmployee(employee, employeeId);
      this.employeeForm.reset();
    }

  }

  onGoBackToList():void{
    this.router.navigate(['users']);
  }

  private initForm():void{
    this.employeeForm = this.fb.group({
      nombres: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      identificacion: ['', [Validators.required]],
      role: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(this.isEmail)]],
    })
  }
}
