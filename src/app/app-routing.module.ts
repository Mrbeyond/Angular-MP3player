import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaylistComponent } from './playlist/playlist.component'; 
import { DockComponent } from './dock/dock.component';
import { DetailsComponent } from './details/details.component';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { AudioplayerComponent} from './audioplayer/audioplayer.component';



 const routes: Routes = [
   {path: '', redirectTo: 'audioplayer', pathMatch: 'full' },
   { path: 'audioplayer', component: AudioplayerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
