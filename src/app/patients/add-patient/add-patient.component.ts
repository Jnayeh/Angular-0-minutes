import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/shared/model/patient';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { PatientService } from 'src/app/shared/services/patient.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  patient: Patient=new Patient();
 
  confirmPwd: string;
  visible = true;
  message: any;
  id: any;
  
  constructor(private patientService: PatientService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
      this.id = this.activatedRoute.snapshot.params["id"] ;
      console.log(this.id);
      if(this.id !== null){
        this.patientService.findById(this.id).subscribe(res => {
          this.patient = res;
          this.visible = false;
          console.log(this.visible);
        }, err => {
          console.log(err);
        });
      }
  
    }

    ajouter() {
      console.log("Patient: ",this.patient);
      this.patientService.save(this.patient).subscribe(res => {
          if (res.succes) {
           this.message=res.message;
           this.router.navigate(['/login']);
          } else {
            this.message=res.message;
          }
        }, err => {
          this.message='not effected';
        }
      );
  
    }

    
    modifier() {
      console.log(this.patient.role);
      this.patientService.update(this.patient).subscribe(res => {
          if (res.succes) {
            this.message=res.message;
            this.router.navigate(['/patient',this.id]);
          } else {
            this.message=res.message;
          }
        }, err => {
          this.message='not effected'
        }
      );
  
    }

    public supprimer(patient){
      this.patientService.delete(patient.id).subscribe(
        data => {
          if (data.succes){
            this.message=data.message;
            console.log(data.message);
            localStorage.removeItem('token');
            this.router.navigate(['/login']);
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
