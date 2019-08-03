import { Component, OnInit } from '@angular/core';
import { ServemeService }  from './../serveme.service';
import { FormsModule } from '@angular/forms';
import { Playlistparameters }  from './../list';


@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

	newplaylistname:string;
	create_new: boolean = true;
	Newplaylist_input: boolean = false;
	error_input: boolean = false;

  constructor( private instanceOfServeme: ServemeService) {

  }
  
    onselect( item: Playlistparameters ): void {
            localStorage.setItem("save_selectedplaylist", JSON.stringify(item))
            if(localStorage.getItem("save_selectedplaylist")) {
                item = JSON.parse(localStorage.getItem("save_selectedplaylist"));
                console.log( item + " of "+"save_selectedplaylist"+" is just stored and collected from storage");
                this.instanceOfServeme.selectedplaylist = item;            
   	 		    console.log(this.instanceOfServeme.selectedplaylist.playlistsongs);
            }else{
              console.log("save_selectedplaylist error");
            }
   	}    

  	enablenewplaylist(){
  		this.Newplaylist_input=true;
  		this.create_new = false;
  	}

  	addnewplaylist(){
  		if (this.newplaylistname){
  		    	this.instanceOfServeme.playlistpack.push(
  		    		{
  		    			playlistname: this.newplaylistname ,
  		    			playlistsongs:  [ ],

  		     			id: this.instanceOfServeme.playlistpack.length+1
  		     		 }
  		     	);
            localStorage.setItem("save_playlistpack", JSON.stringify(this.instanceOfServeme.playlistpack))
            if(localStorage.getItem("save_playlistpack")) {
                this.instanceOfServeme.playlistpack = JSON.parse(localStorage.getItem("save_playlistpack"));
                console.log(this.instanceOfServeme.playlistpack);
            }
            else{
              console.log("pack storage error");
            }       
  		     	this.create_new = true;
  		     	this.error_input = false;
  		     	this.Newplaylist_input=false;
  		}
  		else{
  		 this.error_input = true;
  		}
  	}

  	endadders(){
  		this.instanceOfServeme.addSongs = false;
  		this.create_new = true;
  		this.Newplaylist_input = false;
  	}




  	ngOnInit() {
  	}







/*
   getplaylist(): void {
   	this.list = this.secondserve.getplaylist();
   }
	this.getplaylist();
  		this.playlistcomponent= this.stillserve.variable;
  		this.todayaswell = this.stillserve.showdate();

   Note: it is commented to apply new method of "observbale"  and "of" implemented in
   ServemeService class. the new method is show as the new getplaylist() below.


   getplaylist(): void {
	    this.instanceOfServeme.getplaylist()
	    .subscribe(list => this.Myplaylist = list);
    }

 */
}
