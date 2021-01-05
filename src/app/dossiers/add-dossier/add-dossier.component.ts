import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dossier } from 'src/app/shared/model/dossier';
import { Patient } from 'src/app/shared/model/patient';
import { DossierService } from 'src/app/shared/services/dossier.service';
import { PatientService } from 'src/app/shared/services/patient.service';

@Component({
  selector: 'app-add-dossier',
  templateUrl: './add-dossier.component.html',
  styleUrls: ['./add-dossier.component.css']
})
export class AddDossierComponent implements OnInit {
  
  
 
  constructor(
    private patientService : PatientService,
    private dossierService : DossierService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

    message: any;
    dossier=new Dossier();
    dossiers: Dossier[];
    consultid=1;
    patient_= new Patient();
    dossier_id;
    med_id: number;
    visible=true;
    patients: Patient[];

  ngOnInit(): void {

    this.dossier_id = this.activatedRoute.snapshot.params["dossier_id"] ;
    
    this.med_id = this.activatedRoute.snapshot.params["id"] ;

    console.log("Doss id:",this.dossier_id);

    if(this.dossier_id != null){
      this.findDossierById(this.dossier_id);
      this.visible = false;
    }
    this.findAllPatients();
  
  }

  findAllPatients(){
    this.patientService.getAll()
      .subscribe(data => {
        this.patients=[];
        
        for (let patient of data){
          if(patient.rdvs!=[]){
            for (let rdv of patient.rdvs){
              console.log("rdv_id",rdv.medecin.id);
              console.log("med_id",this.med_id);
              if ((rdv.medecin.id == this.med_id )&&(rdv.verified)&&(patient.dossierMedical==null)){
                this.patients.push(patient);
              }
            }
          }
        }

        console.log("Pats:",this.patients);
      }, err => {
        console.log(err);
      });
    }
  
  findPatId(id){
      if(id !== null){
        this.patientService.findById(id).subscribe(res => {
          this.dossier.patient = res;
          console.log("Pat:",this.dossier.patient);
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
            this.visible = false;
            this.dossier=r;
            console.log("Dossier:",this.dossier);
            this.patient_=this.dossier.patient;
            if (this.dossier==null){
              this.message="Something went wrong"
            }
          }
        }
      }, err => {
        console.log(err);
      });
    }

  ajouter() {
    console.log("Dossier to add:",this.dossier);
    this.dossierService.save(this.dossier).subscribe(res => {
        if (res.succes) {
         this.message="Success";
       //this.router.navigate(['/list-dossiers']);
       
        } else {
          this.message=res.message;
          this.router.navigate(['/medecin',this.med_id,'list-dossiers','edit-dossier',this.dossier_id]);
        }
      }, err => {
        this.message='not effected';
      }
    );

  }
 
  modifier() {
    this.dossierService.update(this.dossier).subscribe(res => {
        if (res.succes) {
          this.message=res.message;
          this.router.navigate(['/medecin',this.med_id,'list-dossiers']);
        } else {
          this.message=res.message;
        }
      }, err => {
        this.message='not effected'
      }
    );

  }
}
