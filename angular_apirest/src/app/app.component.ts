import { Component, OnInit } from '@angular/core';
import { utilisateur} from './utilisateur.model';
import { UtlisateurService} from './utlisateur.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  utilisateur$: utilisateur[];
  title = 'newapi';

constructor( private utlisateurService : UtlisateurService){}

ngOnInit(){
  return this.utlisateurService.voirUtilisateur()
  .subscribe(data=> {this.utilisateur$ = data, console.log(data,'salut ')});
  
}
}