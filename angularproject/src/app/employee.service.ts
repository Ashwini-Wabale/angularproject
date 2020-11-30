import { Injectable } from '@angular/core';
import { Employee } from './employee.model';

@Injectable()
export class EmployeeService{
    earr=[new Employee(15,"Ashwini",50000),
    new Employee(28,"Ankita",25000),
    new Employee(29,"Rupali",36000),
    new Employee(40,"Deepali",42000),
    new Employee(24,"Monika",28000)]; 

    getAllEmployee(){
        return this.earr;
    } 
    addEmployee(e:Employee){
        this.earr.push(e);
    } 
    updateEmployee(e:Employee){
        for(let i=0;i<this.earr.length;i++){
            if(this.earr[i].eid==e.eid){
                this.earr[i].ename=e.ename;
                this.earr[i].salary=e.salary;
                break;
            }
        }

    } 
    deleteEmployee(e:Employee){
        for(let i=0;i<this.earr.length;i++){
            if(this.earr[i].eid==e.eid){
                this.earr.splice(i,1);
                break;
            }
        }
    }
}