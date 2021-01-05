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
  id: any;
  
  constructor(private medecinService: MedecinService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

    ngOnInit(): void {
      this.id = this.activatedRoute.snapshot.params["id"] ;
      console.log("id: ",this.id);
      if(this.id !== null){
        this.medecinService.findById(this.id).subscribe(res => {
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
      this.medecinService.update(this.medecin).subscribe(res => {
          if (res.succes) {
            this.message=res.message;
            this.router.navigate(['/medecin',this.id]);
          } else {
            this.message=res.message;
          }
        }, err => {
          this.message='not effected'
        }
      );
  
    }

    public supprimer(medecin){
      this.medecinService.delete(medecin.id).subscribe(
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
