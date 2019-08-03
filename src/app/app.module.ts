import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { DockComponent } from './dock/dock.component';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { DetailsComponent } from './details/details.component';
import { ServemeService } from  './serveme.service';
import { FormsModule } from '@angular/forms';
import { AudioplayerComponent } from './audioplayer/audioplayer.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaylistComponent,
    DockComponent,
    NavComponent,
    MainComponent,
    DetailsComponent,
    AudioplayerComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ServemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
