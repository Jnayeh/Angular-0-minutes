import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { RendezVous } from 'src/app/shared/model/rendez-vous';
import { RendezVousService } from 'src/app/shared/services/rendez-vous.service';

@Component({
  selector: 'app-list-rendez-vous',
  templateUrl: './list-rendez-vous.component.html',
  styleUrls: ['./list-rendez-vous.component.css']
})
export class ListRendezVousComponent implements OnInit {
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
        this.rdvs= this.rdvs.filter(rdv=>rdv.medecin.id==this.id);
        this.rdvs_verif=this.rdvs.filter(rdv=>rdv.verified==true);
        this.rdvs=this.rdvs.filter(rdv=>rdv.verified==false);
        console.log("Non verif:",this.rdvs);
        console.log("verif:",this.rdvs_verif);
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

    verifier(rdv:RendezVous){
      rdv.verified=true;
      this.rdvService.update(rdv).subscribe(res => {
        if (res.succes) {
          this.message=res.message;
          this.findAllRendezVous();
          
        } else {
          this.message=res.message;
        }
      }, err => {
        this.message='not effected'
      }
    );
    }

}
