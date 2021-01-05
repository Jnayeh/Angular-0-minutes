import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-medecin-paging',
  templateUrl: './medecin-paging.component.html',
  styleUrls: ['./medecin-paging.component.css']
})
export class MedecinPagingComponent implements OnInit {

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
