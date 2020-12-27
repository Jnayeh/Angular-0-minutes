import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dossier } from 'src/app/shared/model/dossier';
import { DossierService } from 'src/app/shared/services/dossier.service';
import { PatientService } from 'src/app/shared/services/patient.service';

@Component({
  selector: 'app-list-dossiers',
  templateUrl: './list-dossiers.component.html',
  styleUrls: ['./list-dossiers.component.css']
})
export class ListDossiersComponent implements OnInit {

  dossiers: Dossier[];
  dossier=new Dossier();
  displayedColumns: string[] = ['id', 'patient','date','actions'];
  message: any;
  patients: any;
  
  constructor(
    private dossierService: DossierService,
    private router: Router,
    private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    
    this.findAll();

  }

 

  

  findAll(){
    this.dossierService.getAll()
      .subscribe(data => {
        this.dossiers = data;
      }, err => {
        console.log(err);
      });
    }
  
    public supprimer(dossier){
      this.dossierService.delete(dossier.id).subscribe(
        data => {
          if (data.succes){
            this.message=data.message;
            console.log(data.message);
            this.findAll();
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
