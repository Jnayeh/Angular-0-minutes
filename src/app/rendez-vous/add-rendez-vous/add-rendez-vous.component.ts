import { Component, OnInit } from '@angular/core';
import { RendezVousService } from 'src/app/shared/services/rendez-vous.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { RendezVous } from 'src/app/shared/model/rendez-vous';
import { MedecinService } from 'src/app/shared/services/medecin.service';
import { Medecin } from 'src/app/shared/model/medecin';
import { Patient } from 'src/app/shared/model/patient';
import { PatientService } from 'src/app/shared/services/patient.service';


@Component({
  selector: 'app-add-rendez-vous',
  templateUrl: './add-rendez-vous.component.html',
  styleUrls: ['./add-rendez-vous.component.css']
})
export class AddRendezVousComponent implements OnInit {
  message: any;
  rdv=new RendezVous();
  rdvs: RendezVous[];
  medecins: Medecin[];
  patients: Patient[];
  special='';

  specialities=[
    "Médecine génerale",
    "Médecine dentaire",
    "Médecine interne",
    "Médecine palliative",
    "Médecine physique",
    "Médecine préventive",
    "Néonatologie",
    "Néphrologie",
    "Neurologie",
    "Odontologie",
    "Oncologie",
    "Obstétrique",
    "Ophtalmologie",
    "Orthopédie",
    "Pédiatrie",
    "Pneumologie",
    "Psychiatrie",
    "Radiologie"];
  visible=true;
  medecinsparspeciality: any;
  patient_id;
  medecin_id;
  id: any;

  constructor(
    private medecinService:MedecinService,
    private patientService:PatientService,
    
    private rdvService:RendezVousService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) {
      this.id = this.activatedRoute.snapshot.params["id"] ;
    this.findPatId(this.id);
     }

    findAllRdvs(){
      this.rdvService.getAll()
        .subscribe(data => {
          this.rdvs = data;
          console.log("Edit Rdv: ", this.rdvs[0]);
        }, err => {
          console.log(err);
        });
      }
  public findAllMedecins(){
        this.medecinService.getAll()
          .subscribe(data => {
            this.medecins = data;
            console.log(this.medecins);
          }, err => {
            console.log(err);
          });
        }

    findMedecinsparspeciality(speciality): Medecin[] {
          this.medecinsparspeciality=[];
          for (let et of this.medecins){
            if (et.speciality==speciality)
            {
              this.medecinsparspeciality.push(et);
            }
          }
          return this.medecinsparspeciality;
        }
        findMedId(id){
          if(id !== null){
            this.medecinService.findById(id).subscribe(res => {
              this.rdv.medecin = res;
            }, err => {
              console.log(err);
            });
          }
        }
        findPatId(id){
            if(id !== null){
              this.patientService.findById(id).subscribe(res => {
                this.rdv.patient = res;
                console.log("RES:", res);
              }, err => {
                console.log(err);
              });
            }
          }
  ngOnInit(): void {
    let rendez_vous_id = this.activatedRoute.snapshot.params["rendez_vous_id"] ;

    this.findAllRdvs();
    this.findAllMedecins();
    

      console.log(rendez_vous_id);
      if(rendez_vous_id !== null){
        this.findById(rendez_vous_id);
      }
     
  }
  findById(id){
    this.rdvService.getAll()
      .subscribe(data => {
        this.rdvs = data;
        for (let r of this.rdvs){
          if (r.id==id){
            this.visible = false;
            this.rdv=r;
            this.patient_id=this.rdv.patient.id;
            this.medecin_id=this.rdv.medecin.id;
            if (this.rdv==null){
              this.message="Something went wrong"
            }
          }
        }
      }, err => {
        console.log(err);
      });
    }
  ajouter() {
    
    console.log("rdv:", this.rdv);
    this.rdvService.save(this.rdv).subscribe(res => {
        if (res.succes) {
          this.message=res.message;
          this.router.navigate(['/patient',this.id,'list-rendez-vous']);
        } else {
          this.message=res.message;
        }
      }, err => {
        this.message='not effected';
      }
    );

  }

  
  modifier() {
    this.rdv.verified=false;
    this.rdvService.update(this.rdv).subscribe(res => {
        if (res.succes) {
          this.message=res.message;
          this.router.navigate(['/patient',this.id,'list-rendez-vous']);
        } else {
          this.message=res.message;
        }
      }, err => {
        this.message='not effected'
      }
    );

  }

}
