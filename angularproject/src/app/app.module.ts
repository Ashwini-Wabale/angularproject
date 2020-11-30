import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EtabComponent } from './employee/etab.component';
import { EmployeeService } from './employee.service';
import { FormsModule } from '@angular/forms';
import { EformComponent } from './employee/eform.component';

@NgModule({
  declarations: [
    AppComponent,EtabComponent,EformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
