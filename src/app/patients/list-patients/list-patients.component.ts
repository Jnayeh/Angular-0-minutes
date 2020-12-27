import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { Patient } from 'src/app/shared/model/patient';
import { PatientService } from 'src/app/shared/services/patient.service';

@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.css']
})
export class ListPatientsComponent implements OnInit, AfterViewInit{

  displayedColumns: string[] = ['id', 'name','username', 'adresse', 'email','actions'];
  dataSource: MatTableDataSource<Patient>;


  patients: Patient[] = [];
  patient: Patient = new Patient;
  message: any;
  constructor(
    private patientService: PatientService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    ) { }
  ngAfterViewInit(): void {
    
  }

public findAllPatients(){
  this.patientService.getAll()
    .subscribe(data => {
      this.patients = data;
    }, err => {
      console.log(err);
    });
  }
  
ngOnInit() {
  
    this.findAllPatients();
    this.dataSource = new MatTableDataSource(this.patients);
    console.log(this.dataSource);
    
  }

  public supprimer(patient){
        this.patientService.delete(patient.id).subscribe(
          data => {
            if (data.succes){
              this.message=data.message;
              console.log(data.message);
              this.findAllPatients();
            }else{
              this.message=data.message;
              console.log(data.message);
            }
          }, error1 => {
            this.message='Opération non effectué';
            console.log(error1);
          }
        );

  }

  
}
