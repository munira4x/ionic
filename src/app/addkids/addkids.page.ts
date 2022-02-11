import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addkids',
  templateUrl: './addkids.page.html',
  styleUrls: ['./addkids.page.scss'],
})
export class AddkidsPage implements OnInit {
  router: any;

  constructor() { }

  ngOnInit() {
  }
  navigate(){
    this.router.navigate(['/menu'])
  }

}
