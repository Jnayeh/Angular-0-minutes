import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { Consultation } from 'src/app/shared/model/consultation';
import { ConsultationService } from 'src/app/shared/services/consultation.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-list-consultations',
  templateUrl: './list-consultations.component.html',
  styleUrls: ['./list-consultations.component.css']
})
export class ListConsultationsComponent implements OnInit {
  dataSource: MatTableDataSource<Consultation>;
  message: any;
  consultaions: Consultation[];
  consult= new Consultation();

  displayedColumns: string[] = ['id', 'patient','medecin','treatment','maladie','details','actions'];
  dossier_id: any;

  constructor(
    public dialog: MatDialog,
    private consultservice : ConsultationService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.dossier_id = this.activatedRoute.snapshot.params["dossier_id"] ;
    this.findAllconsults();
  }
  public findAllconsults(){
    this.consultservice.getAll()
      .subscribe(data => {
        this.consultaions = data;
        this.consultaions= this.consultaions.filter(consult=>consult.dossier.id==this.dossier_id)
        console.log("consultations:",this.consultaions);
        console.log("data:",data);
      }, err => {
        console.log(err);
      });
    }
  
    public supprimer(consultation){
          this.consultservice.delete(consultation.id).subscribe(
            data => {
              if (data.succes){
                this.message=data.message;
                console.log(data.message);
                this.findAllconsults();
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
