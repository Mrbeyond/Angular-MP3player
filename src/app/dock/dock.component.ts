import { Component, OnInit, OnDestroy, HostListener} from '@angular/core';
import { ServemeService } from './../serveme.service';
import { Music_list } from './../musiclist';
import { Songlistparameters } from './../list';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-dock',
  templateUrl: './dock.component.html',
  styleUrls: ['./dock.component.css']
})
export class DockComponent implements OnInit, OnDestroy {
	volume:number;
	mute: boolean = false;
	volumedown: boolean = false;
	volumeup: boolean = true;
	shuffle: boolean = false;
	repeat: boolean = false;
	nexter: boolean = true;
	current_Time: number;
    store_current_Time: any;
	random: number;
    varr: string;

    constructor( private myservicefordock: ServemeService) { 
    	setInterval((()=>{this.timer_mover(); this.shuffler();}),500);
        if(!this.myservicefordock.newaudio) {
            this.current_Time = JSON.parse(localStorage.getItem("store_current_Time"));
            this.myservicefordock.display_current_time = JSON.parse(localStorage.getItem("display_current_Time"));
        }

     }

    volumecontrol(){
    	if( this.myservicefordock.newaudio){
    		this.myservicefordock.newaudio.volume = 1 * (this.volume/100);
    		console.log(this.myservicefordock.newaudio.volume);
			if(this.myservicefordock.newaudio.volume < 0.50  ){
    			this.volumedown = true;
    			this.volumeup = false;
    			this.mute= false;
    		}
    		if(this.myservicefordock.newaudio.volume >= 0.50) {
    			this.volumeup = true;
    			this.volumedown = false;
    			this.mute = false;
    		}
    		if(this.myservicefordock.newaudio.volume === 0) {
    			this.mute = true;
		    	this.volumedown = false;
		    	this.volumeup = false;    			
    		}    		
		}
   

    }

    stop_playing_song(){
    	if( this.myservicefordock.newaudio){
    		this.myservicefordock.condition = false;
    		this.myservicefordock.stop = true;
    		this.myservicefordock.newaudio.pause();
    		this.myservicefordock.newaudio.currentTime = 0;
    	}
    }

    current_time_control(){
    	if( this.myservicefordock.newaudio){
    		this.myservicefordock.newaudio.currentTime =
    		 this.myservicefordock.newaudio.duration *(this.current_Time / 100) ;
    		 this.myservicefordock.timer();
    	}
    }

    timer_mover(){
    	if( this.myservicefordock.newaudio){
    	    this.store_current_Time = ( (this.myservicefordock.newaudio.currentTime /
    	     this.myservicefordock.newaudio.duration) * 100);

            localStorage.setItem("store_current_Time", JSON.stringify(this.store_current_Time));
            if(localStorage.getItem("store_current_Time")){
                this.current_Time = JSON.parse(localStorage.getItem("store_current_Time"))
                this.myservicefordock.current_Time = this.current_Time;
            }
    	}
    }

    
    

    showmute() {
    	this.myservicefordock.newaudio.volume = 0;
    	this.mute= true;
    	this.volumedown = false;
    	this.volumeup = false;
    }

    Next(){
   		if(this.myservicefordock.selectedsong){
   			if(this.shuffle) {
     			this.random = 
    			Math.floor((Math.random())*(this.myservicefordock.selectedplaylist.playlistsongs.length-1-
    				this.myservicefordock.selectedsong.id)+this.myservicefordock.selectedsong.id);
    			this.myservicefordock.selectedsong = 
    			this.myservicefordock.selectedplaylist.playlistsongs[this.random];
    			if(!this.myservicefordock.stop){    			
    				this.myservicefordock.playanyselectedmusic();
    			}
   			}
   			if(this.nexter){
	   			if(this.myservicefordock.selectedsong.id < this.myservicefordock.selectedplaylist.playlistsongs.length){
			   		this.myservicefordock.selectedsong = 
			   		this.myservicefordock.selectedplaylist.playlistsongs[this.myservicefordock.selectedsong.id];
			   		console.log(this.myservicefordock.selectedsong);
			   		if(!this.myservicefordock.stop){    			
    				this.myservicefordock.playanyselectedmusic();
    			}
		   		}
		   	}
   		}
    }

     Previous(){
		if(this.myservicefordock.selectedsong){
     		if(this.shuffle) {
     			this.random = 
    			Math.floor((Math.random())*this.myservicefordock.selectedsong.id);
    			this.myservicefordock.selectedsong = 
    			this.myservicefordock.selectedplaylist.playlistsongs[this.random];    			
    			if(!this.myservicefordock.stop){    			
    				this.myservicefordock.playanyselectedmusic();
    			}
   			}
   			if(this.nexter){
		   			if(this.myservicefordock.selectedsong.id >=2 ){
				   		this.myservicefordock.selectedsong = 
				   		this.myservicefordock.selectedplaylist.playlistsongs[this.myservicefordock.selectedsong.id-2];
				   		console.log(this.myservicefordock.selectedsong);
				   		if(!this.myservicefordock.stop){    			
    						this.myservicefordock.playanyselectedmusic();
    					}
			   		}
			   	}
	   		}
    }

    fastforward(){
    	if(this.myservicefordock.selectedsong){
			this.myservicefordock.newaudio.currentTime += (this.myservicefordock.newaudio.duration *(10/100));
    	}
    }

    fastbackward(){
    	if(this.myservicefordock.selectedsong){
    		this.myservicefordock.newaudio.currentTime -= (this.myservicefordock.newaudio.duration *(10/100))
    	}
    }

    shuffler(){
    	if(this.myservicefordock.selectedsong){
    		if(this.shuffle){
    			this.myservicefordock.newaudio.onended= ()=>{
	    			this.random = 
	    			Math.floor((Math.random())*this.myservicefordock.selectedplaylist.playlistsongs.length);
	    			this.myservicefordock.selectedsong = 
	    			this.myservicefordock.selectedplaylist.playlistsongs[this.random];    			
	    			this.myservicefordock.playanyselectedmusic();
	    		}
    		}
    	}
    }
    	

    looper(){
	    this.repeat = !this.repeat;
    	if(this.myservicefordock.selectedsong) {    	
	    	if(this.repeat) {
	    		this.myservicefordock.newaudio.loop = true;
	    	}

	    	if(!this.repeat) {
	    		this.myservicefordock.newaudio.loop = false ;
	    	}
   		}
    }

   

 

    ngOnInit() {

    }

    

    ngOnDestroy() {
        
    }

}
