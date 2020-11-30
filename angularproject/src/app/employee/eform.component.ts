import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
    selector:"eform",
    templateUrl:"./eform.component.html",
    styleUrls:["./eform.component.css"]
})
export class EformComponent{
    eid:number;
    ename:string;
    salary:number;
    @Output() myevent=new EventEmitter();
    @Input("upemp") emp:Employee;
    constructor(private eservice:EmployeeService){

    } 
    ngOnChanges(changes:SimpleChanges){
        if(changes["emp"].currentValue!=changes["emp"].previousValue){
            this.eid=this.emp.eid;
            this.ename=this.emp.ename;
            this.salary=this.emp.salary;
        }

    }
    addEmployee(){
        let e=new Employee(this.eid,this.ename,this.salary);
        this.eservice.addEmployee(e);
        this.eid=0;
        this.ename="";
        this.salary=0;
        this.myevent.emit(false);


    } 
    updateEmployee(){
        let e=new Employee(this.eid,this.ename,this.salary);
        this.eservice.updateEmployee(e);
        this.eid=0;
        this.ename="";
        this.salary=0;
        this.myevent.emit(false);
    }
}