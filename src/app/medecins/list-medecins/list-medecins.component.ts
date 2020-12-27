import { Component, OnInit } from '@angular/core';
import { Medecin } from 'src/app/shared/model/medecin';
import { MedecinService } from 'src/app/shared/services/medecin.service';

import {MatTableDataSource} from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-medecins',
  templateUrl: './list-medecins.component.html',
  styleUrls: ['./list-medecins.component.css']
})
export class ListMedecinsComponent implements OnInit {
  medecins: Medecin[];
  displayedColumns: string[] = ['id', 'name','username', 'adresse', 'email', 'speciality','actions'];
  dataSource: MatTableDataSource<Medecin>;
  message: any;
  
  constructor(
    private medecinService: MedecinService,
    private router: Router,
    private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    this.findAll();
  }

  

  public findAll(){
    this.medecinService.getAll()
      .subscribe(data => {
        this.medecins = data;
        console.log(this.medecins);
      }, err => {
        console.log(err);
      });
    }
  
    public supprimer(medecin){
      this.medecinService.delete(medecin.id).subscribe(
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
