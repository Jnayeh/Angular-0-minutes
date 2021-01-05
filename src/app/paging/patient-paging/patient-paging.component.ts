import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patient-paging',
  templateUrl: './patient-paging.component.html',
  styleUrls: ['./patient-paging.component.css']
})
export class PatientPagingComponent implements OnInit {

  token: string;
  id: any;

  constructor(
    public router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.router;
    this.token=localStorage.getItem('token');
    //console.log(this.token);
    this.id = this.activatedRoute.snapshot.params["id"] ;
  }
  deconnecter(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
