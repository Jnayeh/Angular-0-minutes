import { Component, OnInit } from '@angular/core';
import { Medecin } from 'src/app/shared/model/medecin';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { MedecinService } from 'src/app/shared/services/medecin.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-medecin',
  templateUrl: './add-medecin.component.html',
  styleUrls: ['./add-medecin.component.css']
})
export class AddMedecinComponent implements OnInit {

  medecin : Medecin= new Medecin();
  medecins: Medecin[];
  confirmPwd: string;
  visible = true;
  message: any;
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
  
  constructor(private medecinService: MedecinService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
      const id = this.activatedRoute.snapshot.params["med_id"] ;
      console.log(id);
      if(id !== null){
        this.medecinService.findById(id).subscribe(res => {
          this.medecin = res;
          this.visible = false;
          console.log(this.visible);
        }, err => {
          console.log(err);
        });
      }
    }

    ajouter() {
      this.medecinService.save(this.medecin).subscribe(res => {
          if (res.succes) {
           this.message=res.message;
         this.router.navigate(['/list-medecin']);
          } else {
            this.message=res.message;
          }
        }, err => {
          this.message='not effected';
        }
      );
  
    }
    modifier() {
      this.medecinService.update(this.medecin).subscribe(res => {
          if (res.succes) {
            this.message=res.message;
            this.router.navigate(['/list-medecin']);
          } else {
            this.message=res.message;
          }
        }, err => {
          this.message='not effected'
        }
      );
  
    }

}
