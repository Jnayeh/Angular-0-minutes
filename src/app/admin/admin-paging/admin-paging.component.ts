import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-paging',
  templateUrl: './admin-paging.component.html',
  styleUrls: ['./admin-paging.component.css']
})
export class AdminPagingComponent implements OnInit {
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
