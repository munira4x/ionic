import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mykids',
  templateUrl: './mykids.page.html',
  styleUrls: ['./mykids.page.scss'],
})
export class MykidsPage implements OnInit {

  constructor(private router: Router) { }

  navigate(){
    this.router.navigate(['/addkids'])
  }

  ngOnInit() {
  }

}
