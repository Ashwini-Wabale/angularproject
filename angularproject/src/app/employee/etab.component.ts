import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
    selector:"etab",
    templateUrl:"./etab.component.html",
    styleUrls:["./etab.component.css"]
})
export class EtabComponent implements OnInit{
   earr:Employee[]; 
    flag=false; 
    eob:Employee;
    arr:number[];
   constructor(private eservice:EmployeeService){

   } 
   ngOnInit(){
       this.earr=this.eservice.getAllEmployee();
        for(var i=0;i<=this.earr.length;i++){
           this.arr[i]=this.earr[i].salary+this.earr[i].salary;
       } 
   } 
   displayForm(){
        this.flag=true;
   } 
   updateemployee(e:Employee){
       this.flag=true;
       this.eob=e;

   } 
   deleteemployee(e:Employee){
       this.eservice.deleteEmployee(e);

   }

}