import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-patient',
  templateUrl: './home-patient.component.html',
  styleUrls: ['./home-patient.component.css']
})
export class HomePatientComponent implements OnInit {
  id: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }
  
  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params["id"] ;
  }

  deconnecter(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
