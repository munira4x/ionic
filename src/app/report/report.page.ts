import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Camera, DestinationType} from '@awesome-cordova-plugins/camera/ngx';

declare var google : any;

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {
 map: any;
  @ViewChild('map', {static : true}) mapRef : ElementRef;
imgURL;
  constructor(private camera: Camera) { }

  ngOnInit() {
    
  }
  ionviewdidenter(){
    this.showMap();
  }
showMap(){
const location = new google.maps.LatLng(17.824858, 31.053028);
const options = {
  center : location,
  zoom: 15
  
}
  this.map = new google.maps.Map(this.mapRef.nativeElement, options);
}


Done(){
  alert('successfully sent')
}
getCamera(){
  sourceType: this.camera.PictureSourceType.CAMERA
  DestinationType: this.camera.DestinationType.FILE_URI
  this.camera.getPicture().then((res) => {
  this.imgURL = res;
 }).catch(e =>{

 })
}
}
