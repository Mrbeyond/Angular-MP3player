import { Component, OnInit } from '@angular/core';
//import { Music } from './../music';
import {ServemeService} from './../serveme.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']   
})

export class NavComponent implements OnInit {
	mymodel= "age";

	
	 see;
	 psq;
	 i;
	 Myarray = [{id:1, name:'one'}, {id:2, name:'one'},{id:3, name:'one'},
	 {id:4,name:'one'}, {id:5,name:'one'}, {id:6,name:'one'}, {id:7,name:'one'}];
	 arr:any = [1,2,3,4,5,6,7];	


	  constructor() {
	  	//this.playnow();
	  	//this.looper();
	 

	   }

	  ngOnInit() { }

	  adder(){
	  	(this.mymodel != "")? this.arr.push(this.mymodel): alert("emptyname");
	  	console.log(this.arr);
	  }

	  playnow() {
	  	this.see = new Audio();
	  	this.see.id=1;
	  	this.see.src = './../../assets/Soco.mp3';
	  	this.see.play();
	  	console.log(this.see.id); 
	  }

	  looper(){
	  	for ( this.i=0; this.i< this.Myarray.length; this.i++){
	  		 console.log(this.Myarray[this.i]);
	  	}
	  }
	   



}
