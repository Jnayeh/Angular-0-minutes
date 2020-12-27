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
  
  constructor(private patientService: PatientService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
      const id = this.activatedRoute.snapshot.params["pat_id"] ;
      console.log(id);
      if(id !== null){
        this.patientService.findById(id).subscribe(res => {
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
           this.router.navigate(['/home',1,'list-patient']);
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
            this.router.navigate(['/home',1,'list-patient']);
          } else {
            this.message=res.message;
          }
        }, err => {
          this.message='not effected'
        }
      );
  
    }

}
