import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { DossierService } from 'src/app/shared/services/dossier.service';
import { ConsultationService } from 'src/app/shared/services/consultation.service';
import { Consultation } from 'src/app/shared/model/consultation';
import { MedecinService } from 'src/app/shared/services/medecin.service';
import { Dossier } from 'src/app/shared/model/dossier';

@Component({
  selector: 'app-add-consultation',
  templateUrl: './add-consultation.component.html',
  styleUrls: ['./add-consultation.component.css']
})
export class AddConsultationComponent implements OnInit {
  
  consultations: Consultation[];
  consultation= new Consultation();
  message: string;
  dossiers: Dossier[];
  visible=true;
  consult_id;
  dossier_id;
  

  constructor(
    private consultationService:ConsultationService,
    private dossierService:DossierService,
    private medecinService:MedecinService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.dossier_id = this.activatedRoute.snapshot.params["dossier_id"] ;
    this.consult_id = this.activatedRoute.snapshot.params["consult_id"] ;
    console.log("id:",this.dossier_id);
    console.log("consultation_id:",this.consult_id);

    // Medecin ID FROM URL
    this.findMedById(1);

    
    this.findDossierById(this.dossier_id);
      console.log(this.dossier_id);
      if(this.consult_id !== null){
        this.findConsultById(this.consult_id);
      }

  }
       
        findMedById(id){
            if(id !== null){
              this.medecinService.findById(id).subscribe(res => {
                this.consultation.medecinConsult = res;
              }, err => {
                console.log(err);
              });
            }
          }

        findDossierById(id){
          this.dossierService.getAll()
            .subscribe(data => {
              this.dossiers = data;
              for (let r of this.dossiers){
                if (r.id==id){
                  this.consultation.dossier=r;
                  console.log("Dossier:",this.consultation.dossier);
                  this.consultation.patientC=r.patient;
                  if (this.consultation.dossier==null){
                    this.message="Something went wrong"
                  }
                }
              }
            }, err => {
              console.log(err);
            });
          }

          findConsultById(id){
            this.consultationService.getAll()
              .subscribe(data => {
                this.consultations = data;
                for (let r of this.consultations){
                  if (r.id==id){
                    this.visible = false;
                    this.consultation=r;
                    console.log("Consultaion_By_ID:",this.consultation);
                    if (this.consultation.dossier==null){
                      this.message="Something went wrong"
                    }
                  }
                }
              }, err => {
                console.log(err);
              });
            }

  ajouter() {
    console.log("consultation:", this.consultation);
    this.consultationService.save(this.consultation).subscribe(res => {
        if (res.succes) {
         this.message=res.message;
       this.router.navigate(['/edit-dossier',this.dossier_id]);
        } else {
          this.message=res.message;
        }
      }, err => {
        this.message='not effected';
      }
    );

  }

  
  modifier() {
    this.consultationService.update(this.consultation).subscribe(res => {
        if (res.succes) {
          this.message=res.message;
          this.router.navigate(['/edit-dossier',this.dossier_id]);
        } else {
          this.message=res.message;
        }
      }, err => {
        this.message='not effected'
      }
    );

  }

}
