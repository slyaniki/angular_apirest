import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AjouterUtlisateurComponent } from './ajouter-utlisateur/ajouter-utlisateur.component';


const routes: Routes = [
  { path : '', component:HomeComponent},
  { path : 'inscription', component:AjouterUtlisateurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
