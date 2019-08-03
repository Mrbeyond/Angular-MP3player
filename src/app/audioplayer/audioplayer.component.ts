import { Component, OnInit } from '@angular/core';
import { ServemeService } from './../serveme.service';

@Component({
  selector: 'app-audioplayer',
  templateUrl: './audioplayer.component.html',
  styleUrls: ['./audioplayer.component.css']
})
export class AudioplayerComponent implements OnInit {

  constructor( private myservice:ServemeService) { }

  ngOnInit() {
  }

}
