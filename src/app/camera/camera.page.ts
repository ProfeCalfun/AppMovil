import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {

  video: any;

  constructor(
  ) { }
  
  ngOnInit() {
    this.video = document.getElementById('videoElement');
    
  }

  tomarImagen() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        this.video.srcObject = stream;
        this.video.play();
      });
    }
  }


}
