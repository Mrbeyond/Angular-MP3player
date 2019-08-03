import { Component, OnInit, Input } from '@angular/core';
import { Songlistparameters } from './../list';
import { ServemeService } from './../serveme.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  

    constructor( private myservice: ServemeService) { }

	ngOnInit() {
	}

	pushsongs( songs: Songlistparameters ){
	  	if(this.myservice.addSongs){
	  		this.myservice.selectedplaylist.playlistsongs.push(
	  			{ id:songs.id, name:songs.name, src:songs.src, state:songs.state, Artist:songs.Artist, Year:songs.Year}
	  		);
	  		localStorage.setItem("save_selectedplaylist", JSON.stringify(this.myservice.selectedplaylist))
            if(localStorage.getItem("save_selectedplaylist")) {
                this.myservice.selectedplaylist = JSON.parse(localStorage.getItem("save_selectedplaylist"));
                console.log(this.myservice.selectedplaylist);
            }
            else{
              console.log("playlistsongs error");
            }	  		
	  	}

	}

	/* @Input() List:Playlistparameters 
it was used for studying purpose before for one way binding;
*/
}
