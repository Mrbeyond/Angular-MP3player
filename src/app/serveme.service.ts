import { Injectable, } from '@angular/core';
import { Songlistparameters } from './list';
import { Playlistparameters } from './list';
import { Observable, of } from 'rxjs';
import { Music_list } from './musiclist'
import { Play_list } from './musiclist'



@Injectable({
  providedIn: 'root'
})
export class ServemeService {

	playlistpack : Playlistparameters[] = Play_list;
	selectedplaylist: Playlistparameters;
	selectedsong: Songlistparameters;
	condition: boolean = false;
	stop: boolean = false;
	addSongs: boolean = false;
	audio: any;
	newaudio: any;
    current_Time: any;
	display_current_time: any;
	current_minute: any;
	current_second: any;
	display_duration: any;
	duration_minute: any;
	duration_second: any;
	local : number[] = [1,2,3,4];
    col_local: any;
    gel_local: number[];

    constructor() {
    	setInterval((()=>{this.timer(); this.playnextsong();}),400);
            this.retrieve();            
    }

    functionfortestingselectedsong() {
	  	if(this.selectedsong) {
	  		console.log(this.selectedsong );
  	    }
    }

    timeparam(x){
    	if(x<10) {
    		return x = 0+""+x;
    	}
    	else{
    		return x = x;
    	}
    }

    timer(){
    	if(this.newaudio){
	    	if(this.newaudio.duration) {
	    		this.duration_minute = Math.trunc(this.newaudio.duration/60);
	    		this.duration_second = Math.trunc((this.newaudio.duration)-(this.duration_minute*60));
	    		this.display_duration = this.timeparam(this.duration_minute) +" : " +this.timeparam(this.duration_second);
	    		this.current_minute = Math.trunc(this.newaudio.currentTime/60);
                localStorage.setItem("save_AudioTime", JSON.stringify(this.newaudio.currentTime));
                if(localStorage.getItem("save_AudioTime")) {
                    this.current_Time = JSON.parse(localStorage.getItem("save_AudioTime"));
                }
                else{
                    alert("audioTime storage error");
                }
	    		this.current_second = Math.trunc((this.newaudio.currentTime)-(this.current_minute*60));	    		
                localStorage.setItem("display_current_Time", JSON.stringify(this.timeparam(this.current_minute) +" : " +this.timeparam(this.current_second)));
                if(localStorage.getItem("display_current_Time") ){
                    this.display_current_time = JSON.parse( localStorage.getItem("display_current_Time"));
                }
                else{
                    alert("cant save time display");
                }
	    	}
	    }
    }

    playnextsong(){
    	if(this.condition){
    		this.newaudio.onended= ()=>{
    			if(this.selectedsong.id < this.selectedplaylist.playlistsongs.length) {
    				this.selectedsong = this.selectedplaylist.playlistsongs[this.selectedsong.id];
    			}
    			else{
    				this.selectedsong = this.selectedplaylist.playlistsongs[0];
    			}
    			this.playanyselectedmusic();
    		}
    	}
    }

    playanyselectedmusic(): void {        
    	if(this.selectedsong){
    		if(this.condition){
    		 this.newaudio.pause();
    		}	    		
    	    console.log(this.selectedsong.src);
    	    this.audio = new Audio(this.selectedsong.src);
    	    this.newaudio = this.audio;
    	    this.newaudio.load();
    	    this.newaudio.play();
    	    this.stop = false;
    	    this.condition = true;  	   
        }
    	else {
    		console.log("yet to be defined and it means storage error");
    	}
    }

    SongPause(): void {
    	if(this.selectedsong){
    		this.newaudio.pause();
    		this.condition = false;
    	}
    }

    SongPlay(): void {
    	if(this.selectedsong){
            this.playanyselectedmusic();
            this.newaudio.currentTime =  JSON.parse(localStorage.getItem("save_AudioTime"));
    		
            
    		this.stop = false;
    		this.condition = true;
    	}
    }

    storeandretrive( storage: string, item:any) {
        localStorage.setItem(storage, JSON.stringify(item))
        if(localStorage.getItem(storage)) {
            item = JSON.parse(localStorage.getItem(storage));
            console.log( item + " of " +storage +" is just stored and collected from storage");            
        }
    }  

    retrieve(){
        if(!this.selectedsong){
                this.selectedsong = JSON.parse(localStorage.getItem("save_selectedsong"));
        }
        if(!this.selectedplaylist){
                this.selectedplaylist = JSON.parse(localStorage.getItem("save_selectedplaylist"));
        }
        this.playlistpack = JSON.parse(localStorage.getItem("save_playlistpack"));
        
    }

  

  

  ngOnInit() {
      
   }



 /*getplaylist(): Playlistparameters [] {
   		return playlist_parm;
   	}
 the observable below is used to replace this, hence i have to comment it to note how 
 different methods can be used to bind data to services.  it's said that observable
 binds the whole array like const playlist_parm to single value, though it's quite
 unclear at the moment but i believe i'll soon get it. Note that the getplaylist()
 in the play list param would also be changed. though currently unused.


getplaylist(): Observable <Playlistparameters []> {
   		return  of(playlist_parm);
   }

 Ref: angular official site.
   	*/   
    
/*
   variable: string = "this is from service";

   showdate() {
  	let ndate = new Date();  	
  	return ndate;
   }

   also used for studying purpose from ng7 andriod app, twas fantastic.
*/

  		
}
