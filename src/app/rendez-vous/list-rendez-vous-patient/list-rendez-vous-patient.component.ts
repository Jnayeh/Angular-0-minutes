import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { RendezVous } from 'src/app/shared/model/rendez-vous';
import { RendezVousService } from 'src/app/shared/services/rendez-vous.service';

@Component({
  selector: 'app-list-rendez-vous-patient',
  templateUrl: './list-rendez-vous-patient.component.html',
  styleUrls: ['./list-rendez-vous-patient.component.css']
})
export class ListRendezVousPatientComponent implements OnInit {

  message: any;
  rdvs: RendezVous[]=[];
  rdv= new RendezVous();
  dataSource: MatTableDataSource<RendezVous>;
  rdvs_verif: RendezVous[];
  id: any;

  constructor(
    private rdvService: RendezVousService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  public findAllRendezVous(){
    this.rdvService.getAll()
      .subscribe(data => {
        this.rdvs = data;
        //Med ID from URL
        this.id=this.activatedRoute.snapshot.params["id"] ;
        this.rdvs= this.rdvs.filter(rdv=>rdv.patient.id==this.id);
        this.rdvs=this.rdvs.filter(rdv=>rdv.verified==true);
        console.log("Non verif:",this.rdvs);
      }, err => {
        console.log(err);
      });
    }
    
    
  ngOnInit() {
    
      this.findAllRendezVous();
      console.log("After:",this.rdvs);
      
    }
  
    public supprimer(rdv){
      console.log("rrr:",rdv);
          this.rdvService.delete(rdv.id).subscribe(
            data => {
              if (data.succes){
                this.message=data.message;
                console.log(data.message);
                this.findAllRendezVous();
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
