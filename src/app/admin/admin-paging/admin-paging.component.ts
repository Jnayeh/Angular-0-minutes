import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-paging',
  templateUrl: './admin-paging.component.html',
  styleUrls: ['./admin-paging.component.css']
})
export class AdminPagingComponent implements OnInit {
  token: string;

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.router;
    this.token=localStorage.getItem('token');
    console.log(this.token);
  }

}
