import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-mecedin',
  templateUrl: './home-mecedin.component.html',
  styleUrls: ['./home-mecedin.component.css']
})
export class HomeMecedinComponent implements OnInit {
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
