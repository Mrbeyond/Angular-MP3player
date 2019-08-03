import { Component, OnInit, Input } from '@angular/core';
import { Music_list } from './../musiclist';
import { Songlistparameters } from './../list';
import {ServemeService} from './../serveme.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
	Songlist: Songlistparameters [];

  constructor( private songsservice: ServemeService ) { }

  	

  	getcurrentsong( currentsong: Songlistparameters ):void { 
    this.songsservice.storeandretrive("save_selectedsong", currentsong);
    console.log(currentsong);     
  	this.songsservice.selectedsong =  currentsong;
  	this.songsservice.playanyselectedmusic();

  	 }
  	
  ngOnInit() { }











}
