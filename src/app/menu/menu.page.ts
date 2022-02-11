import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  router: any;

  constructor() { }

  ngOnInit() {
  }
  mykids(){
    this.router.navigateByUrl('/mykids')
  }

}
